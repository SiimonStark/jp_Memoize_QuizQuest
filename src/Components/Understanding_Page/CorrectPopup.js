import React, { Component } from 'react';

export default class CorrectPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctQuest: this.props.currQuest
    }
  }

  onNext = () => {
    let newIndex = 0;

  }

  render() {
    return (
      <section className="landing__body">
        <article className="Quiz__title">
          <h2 className="Correct__quest">Correct Answer!</h2>
          <h4 className="Correct__ans">{this.props.currQuest.correct_answer}</h4>
        </article>
        <nav className="landing__nav">
          <button className="nextQuest__btn next choice" onClick={this.props.nextPop}>Next</button>
        </nav>
      </section>
    );
  }
}