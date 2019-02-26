import React, { Component } from 'react';

export default class QuestPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  validateAns = (event) => {
    let ansClicked = event.target.textContent;
    console.log(ansClicked);

    if (ansClicked === "Thing2") {
      console.log("Great Job");
      console.log("Here are the PROPS: ")
      this.props.renderCorrect();
    } else {
      console.log("Try Again");
      console.log("Here are the PROPS: ")
      this.props.renderIncorrect();
    }
  }

  nextQuest(event) {
    // let btnClicked = event.target.textContent;
    // console.log(btnClicked);

    // if (btnClicked === "Next") {
    //   console.log("Move Along");
    // } else {
    //   console.log("Error");
    // }
  }

  render() {
    console.log("I want to display: ", this.props.currQuest.question)
    return (
      <section className="landing__body">
        <article className="Quiz__title">
          <h2 className="Quiz__question">{this.props.currQuest.question}</h2>
        </article>
        <nav className="landing__nav">
          <button className="Quiz__choice--1 choice" onClick={this.validateAns}>Thing1</button>
          <button className="Quiz__choice--2 choice" onClick={this.validateAns}>Thing2</button>
          <button className="Quiz__choice--3 choice" onClick={this.validateAns}>Thing3</button>
          <button className="Quiz__choice--4 choice" onClick={this.validateAns}>Thing4</button>
        </nav>
      </section>
    );
  }
}

