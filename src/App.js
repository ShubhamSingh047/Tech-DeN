import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./componenet/Navbar";
import SignIn from "./componenet/SignIn";
import Signup from "./componenet/SignUp";
import PrivateRoutes from "./auth/PrivateRoute";
import AdminRoutes from "./auth/AdminRoutes";
import UserDashboard from "./Dashboard/UserDashBoard";
import AdminDashboard from "./Dashboard/AdminDashBoard";
import UserDash from "./Dashboard/UserDashBoard";
import Error from "./componenet/Error";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoutes exact path="/user/dashboard" component={UserDashboard} />
        <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/u/dash" exact component={UserDash} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
