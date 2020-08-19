import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";

import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.aside} />
        <div className="app-content">
          <Route
            path="/profile"
            render={ () => <Profile store={props.store}/> } /> 
          <Route
            path="/messages"
            render={() =>  <DialogsContainer store={props.store}  /> }/>
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
        </div>
      </div>
  );
};

export default App;
