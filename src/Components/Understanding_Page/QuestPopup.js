import React, { Component } from 'react';

export default class QuestPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  validateAns = (event) => {
    let ansClicked = event.target.textContent;
    if (ansClicked === this.props.currQuest.correct_answer) {
      this.props.renderCorrect();
    } else {
      this.props.renderIncorrect();
    }
  }

  mapButtons = () => {
    return this.props.currQuest.answers.map(answer => {
      return <button className="Quiz__choice choice" onClick={this.validateAns}>{answer}</button>
    })
  }

  render() {
    return (
      <section className="landing__body">
        <article className="Quiz__title">
          <h2 className="Quiz__question">{this.props.currQuest.question}</h2>
        </article>
        <nav className="landing__nav">
          {this.mapButtons()}
        </nav>
      </section>
    );
  }
}

