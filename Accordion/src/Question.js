import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* the setInfo when you click on the button if it was false then it will turn to true, and when you click again it turn to false */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          {/* if showInfo is true then it will show the Icon and if it is false it will show the other Icon */}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
      {/* if showInfo is true only then display the info */}
    </article>
  );
};

export default Question;
