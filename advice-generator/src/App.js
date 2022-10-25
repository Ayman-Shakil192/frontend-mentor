import React, { useEffect, useState } from "react";
import axios from "axios";
import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice, id } = res.data.slip;
        setAdvice(advice);
        setId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <div className="card">
        <div id="id">ADVICE #{id}</div>
        <div className="quote">"{advice}"</div>
        <img src={divider} className="divider" alt="divider" />
        <div className="circle">
          <img src={dice} className="dice" alt="dice" />
        </div>
      </div>
    </div>
  );
};

export default App;
