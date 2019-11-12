import React from "react";
import jumbotron from "../styles/jumbotron.module.scss";

const Jumbotron = props => {
  return (
    <div className={jumbotron.container}>
      <h1>
        <i className="fas fa-globe fa-1x"></i> IP FINDER
      </h1>
      <p>
        They're watching you.{" "}
        <span>
          <span>
            <i className="fas fa-eye fa-2x"></i>{" "}
            <i className="fas fa-eye fa-2x"></i>
          </span>
          <br />
          They're always watching you.
        </span>
      </p>
    </div>
  );
};

export default Jumbotron;
