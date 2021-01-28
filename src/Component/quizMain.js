import React, { Component } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./QuizMain.css";

export default class Quiz extends Component {
  // initiating the local state
  state = {
    quiestions: {
      1: "React is a ?",
      2: "ReactJS covers?",
      3: "Number of elements, a valid react component can return ",
      4: "Everything in React is a ",
    },
    answers: {
      1: {
        1: "Freamwork",
        2: "Javascript library",
        3: "None of above",
      },
      2: {
        1: "User Interface layer in an application",
        2: "Data layer in an application",
        3: "None of above",
      },
      3: {
        1: "1",
        2: "3",
        3: "2",
      },
      4: {
        1: "Component",
        2: "Module",
        3: "Class",
      },
    },
    correctAnswers: {
      1: "2",
      2: "1",
      3: "1",
      4: "1",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
    btnClick: false,
    setAns: 0,
  };

  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
        btnClick: true,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
        btnClick: true,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
      btnClick: false,
    });
  };

  render() {
    let {
      quiestions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      score,
    } = this.state;
    console.log(this.state.setAns);
    return (
      <div className="Content">
        {step <= Object.keys(quiestions).length ? (
          <>
            <Question question={quiestions[step]} />
            <Answer
              answer={answers[step]}
              step={step}
              setans={(i) => this.setState({ setAns: i })}
              btnClick={this.state.btnClick}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
              nextStep={this.nextStep}
            />
            <button
              className="NextStep"
              disabled={
                clickedAnswer && Object.keys(quiestions).length >= step
                  ? false
                  : true
              }
              onClick={() => {
                this.nextStep(step);
              }}
            >
              Next
            </button>
          </>
        ) : (
          <div className="finalPage">
            <h1>You have completed the quiz!</h1>
            <p>
              Your score is: {score} of {Object.keys(quiestions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}
