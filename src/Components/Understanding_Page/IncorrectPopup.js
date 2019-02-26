import React, { Component } from 'react';

export default class IncorrectPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  nextQuest(event) {
    let ansClicked = event.target.textContent;
    console.log(ansClicked);

    if (ansClicked === "Next") {
      console.log("Move Along");
    } else {
      console.log("Error");
    }
  }

  render() {
    return (
      <section className="landing__body">
        <article className="Quiz__title">
          <h2 className="Correct__quest">Incorrect Answer!</h2>
          <h4 className="Correct__ans">The Correct Answer: {"thing2"}</h4>
        </article>
        <nav className="landing__nav">
          <button className="nextQuest__btn next choice" onClick={this.props.nextPop}>Next</button>
        </nav>
      </section>
    );
  }
}