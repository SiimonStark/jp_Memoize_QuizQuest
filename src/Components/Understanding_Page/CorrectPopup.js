import React, { Component } from 'react';

export default class CorrectPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  nextQuest = (event) => {
    let btnClicked = event.target.textContent;
    console.log(btnClicked);

    if (btnClicked === "Next") {
      console.log("Move Along");
    } else {
      console.log("Error");
    }
  }

  render() {
    return (
      <section className="landing__body">
        <article className="Quiz__title">
          <h2 className="Correct__quest">Correct Answer!</h2>
          <h4 className="Correct__ans">{"thing2"}</h4>
        </article>
        <nav className="landing__nav">
          <button className="nextQuest__btn next" onClick={this.props.nextPop}>Next</button>
        </nav>
      </section>
    );
  }
}