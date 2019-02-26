import React, { Component } from 'react';

export default class QuestPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  validateAns = (event) => {
    let ansClicked = event.target.textContent;
    console.log(ansClicked);

    if (ansClicked === this.props.currQuest.correct_answer) {
      console.log("Great Job");
      this.props.renderCorrect();
    } else {
      console.log("Try Again");
      this.props.renderIncorrect();
    }
  }

  mapButtons = () => {
    return this.props.currQuest.answers.map(answer => {
      return <button className="Quiz__choice choice" onClick={this.validateAns}>{answer}</button>
    })
  }

  render() {
    console.log("I want to display: ", this.props.currQuest.question)
    return (
      <section className="landing__body">
        <article className="Quiz__title">
          <h2 className="Quiz__question">{this.props.currQuest.question}</h2>
        </article>
        <nav className="landing__nav">
          <button className="Quiz__choice--1 choice" onClick={this.validateAns}>{this.props.currQuest.answers[0]}</button>
          <button className="Quiz__choice--2 choice" onClick={this.validateAns}>{this.props.currQuest.answers[1]}</button>
          <button className="Quiz__choice--3 choice" onClick={this.validateAns}>Thing3</button>
          <button className="Quiz__choice--4 choice" onClick={this.validateAns}>Thing4</button>
          {this.mapButtons()}
        </nav>
      </section>
    );
  }
}

