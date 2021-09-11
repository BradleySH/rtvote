
import React, { useContext } from "react";
import {Switch, Route, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Profile from "./components/Profile"
import Public from "./components/Public"; 
import { UserContext } from "./context/UserProvider";
import ProtectedRoute from "./components/ProtectedRoute";

import './App.css';

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className="App">
      { token && <Navbar logout={logout} token={token} />}
      <Switch>
        <Route exact path="/"
        render={() => token ? <Redirect to="/profile"/> : <Auth />}
        />
        <ProtectedRoute path="/profile"
        component={Profile}
        redirectTo="/"
        token={token}
        />
        <Route path="/public"
        render={() => <Public />}
        />
      </Switch>
    </div>
  );
}

export default App;
