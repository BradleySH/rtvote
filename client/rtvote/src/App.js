import {Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import Public from "./components/Public"; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"
        render={() => <Auth />}
        />
        <Route path="/profie"
        render={() => <Profile />}
        />
        <Route path="/public"
        render={() => <Public />}
        />
      </Switch>
    </div>
  );
}

export default App;
