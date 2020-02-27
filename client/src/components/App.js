import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import ProductIndex from "./products/ProductIndex";
import Login from "./Login";
import AuthRoute from "../util/route_util";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Route path="/" component={Nav} />
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <Route exact path="/" component={ProductIndex} />
      </Switch>
    </div>
  );
};
    
export default App;