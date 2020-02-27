import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import ProductIndex from "./products/ProductIndex";
import Login from "./Login";
import ProductDetail from "./products/ProductDetail";
import Register from "./Register";
import AuthRoute from "../util/route_util";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Route path="/" component={Nav} />
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute exact path="/register" component={Register} routeType="auth" />
        <Route exact path="/" component={ProductIndex} />
        <Route exact path="/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
};
    
export default App;