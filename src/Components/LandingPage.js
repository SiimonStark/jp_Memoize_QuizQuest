import React, { Component } from 'react';

import Navigation from "./Navigation";
import LearnPage from './LearnPage';
import UnderstandPage from './UnderstandPage';
import ReviewPage from './ReviewPage';
import IntroBody from './Landing_Page/IntroBody';

export default class LandingPage extends Component {
  constructor () {
    super ();
    this.state= {
      questReview: [],
      page: ["landing", "learn", "quiz", "review"]
    }
  }

  handleLearn() {
    return(
      <LearnPage />
    )
  }

  handleQuiz() {
    return (
      <UnderstandPage />
    )
  }

  handleReview() {
    return (
      <ReviewPage />
    )
  }

  handleNavClick = (event) => {
    let btnClicked = this.buttonClass(event.target.className);
    console.log("You are clicking:", btnClicked)
  }

  buttonClass = (btn, btnClicked, index, toRender) => {
    btn.includes(this.state.page)
    if (btn.includes("home")) {
      btnClicked = "home"
      toRender = <IntroBody navClick={this.handleNavClick}/>
    } else if (btn.includes("learn")){
      btnClicked = "learn"
    } else if (btn.includes("quiz")) {
      btnClicked = "quiz"
    } else if (btn.includes("review")) {
      btnClicked = "review"
    } else {
      console.log("Alert: Nothing is happening!")
    }
    return (btnClicked);
  }

  render () {
    return(
      <div className="layout">
        <Navigation navClick={this.handleNavClick}/>
        <IntroBody navClick={this.handleNavClick}/>  
      </div>
    )
  }
}