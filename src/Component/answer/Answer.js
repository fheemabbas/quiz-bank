import React, { useState } from "react";
import "./Answer.css";

const Answer = (props) => {
  const [ans, checkans] = useState();
  const [ischeck, setischeck] = useState(false);
  console.log("ans:", ans);
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <li
      className={
        props.correctAnswer === qAnswer
          ? "correct"
          : props.clickedAnswer === qAnswer
          ? "incorrect"
          : "checkAnswers"
      }
      onClick={() => {
        checkans(qAnswer);
        setischeck(true);
      }}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </li>
  ));

  return (
    <>
      <ul
        disabled={ischeck && props.clickedAnswer ? true : false}
        className="Answers"
      >
        {answers}
      </ul>
      {!props.btnClick && ans && (
        <button className="NextStep" onClick={() => props.checkAnswer(ans)}>
          check ans
        </button>
      )}
    </>
  );
};

export default Answer;
