const Group = require("../models/group.js");

exports.creategroup = (req, res) => {
  console.log(req.body);
  let link = req.body.groupname + "link";
  const group = new Group({
    groupname: req.body.groupname,
    description: req.body.description,
    link: link,
  });
  group.save((error, group) => {
    if (error) {
      return res.status(400).json({
        error: error.errmsg,
      });
    } else {
      res.json({
        groupname: group.groupname,
        description: group.description,
        link: group.link,
        id: group._id,
      });
    }
  });
};

exports.getAllGroup = (req, res) => {
  Group.find().exec((err, groups) => {
    if (err || !groups) {
      return res.status(400).json({
        err: "No group",
      });
    }
    res.json(groups);
  });
};
