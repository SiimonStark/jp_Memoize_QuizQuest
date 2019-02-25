import React, { Component } from 'react';
import LandingPage from './Components/LandingPage';

export default class App extends Component {
  constructor() {
    super();
    this.state= {
      questions: []
    }
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/jpQuestions')
    .then(response => response.json())
    .then(questions => {
      this.setState({
        questions: questions.jpQuestions
      })
    })
    .catch(error => {
      throw new Error(error)
    })
  }

  render() {
    console.log("Load Questions: ", this.state.questions)
    return (
      <div className="App">
        <LandingPage questions={this.state.questions}/>
      </div>
    );
  }
}