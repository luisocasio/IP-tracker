import React from "react";
import ContentCard from "./ContentCard";
import app from "../styles/app.module.scss";
import Jumbotron from "./Jumbotron";

const App = () => {
  return (
    <div className={app.container}>
      <Jumbotron />
      {/* <h1>Bitch! Gimme IP?</h1> */}
      <ContentCard />
    </div>
  );
};

export default App;
