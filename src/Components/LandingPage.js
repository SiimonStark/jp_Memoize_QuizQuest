import React, { Component } from 'react';

import Navigation from "./Navigation";
import LearnPage from './LearnPage';
import UnderstandPage from './UnderstandPage';
import ReviewPage from './ReviewPage';
import IntroBody from './Landing_Page/IntroBody';
import CorrectPopup from './Understanding_Page/CorrectPopup';
import IncorrectPopup from './Understanding_Page/IncorrectPopup';
import QuestPopup from './Understanding_Page/QuestPopup';


export default class LandingPage extends Component {
  constructor (props) {
    super (props);
    this.state= {
      questReview: [],
      pages: {
        home: IntroBody,
        learn: LearnPage,
        quiz: UnderstandPage,
        review: ReviewPage,
        question: QuestPopup,
        correct: CorrectPopup,
        incorrect: IncorrectPopup
      },
      Page: IntroBody,
    }
  }

  handleNavClick = (event) => {
    let btnClicked = this.buttonClass(event.target.className);
  }

  buttonClass = (btn, btnClicked) => {
    if (btn.includes("home")) {
      btnClicked = this.state.pages.home
    } else if (btn.includes("learn")){
      btnClicked = this.state.pages.learn
    } else if (btn.includes("quiz")) {
      btnClicked = this.state.pages.quiz
    } else if (btn.includes("review")) {
      btnClicked = this.state.pages.review
    } else {
      console.log("Alert: Nothing is happening!")
    }
    this.setPages(btnClicked);
    return (btnClicked);
  }

  setPages(btnClicked) {
    this.setState({Page: btnClicked});
  }

  render () {
    return(
      <div className="layout">
        <Navigation navClick={this.handleNavClick}/>
        <this.state.Page navClick={this.handleNavClick}
          questions={this.props.questions} />  
      </div>
    )
  }
}