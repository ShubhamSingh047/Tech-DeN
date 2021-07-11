const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User(req.body);
  user.save((error, user) => {
    if (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          error: "Email already exist. Please try another email",
        });
      }
      return res.status(400).json({
        error: error,
      });
    }
    res.json({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    try {
      if (err !== null) {
        res.status(400).json({
          error: "server error",
        });
      }
      if (!user) {
        return res.status(400).json({
          error: "not a registered email",
        });
      }
      if (user && user.authenticate(password) === false) {
        return res.status(401).json({
          error: "Email and password doesn't match",
        });
      }
      //create token
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);

      //put token in cookie
      res.cookie("token", token, { expire: new Date() + 9999 });

      //send response to front end
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, name, email, role } });
    } catch (error) {
      console.log(error);
    }
  });
};

//protected routes
exports.IsSignedIn = expressJwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

//signout
exports.signout = (req, res) => {
  res.clearCookie("token");
  console.log(res.cookie);
  res.json({
    message: "user sign-out successfully",
  });
};

//custom middleware
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "ACCESS DENIED!!! [You are not admin]",
    });
  }

  next();
};
