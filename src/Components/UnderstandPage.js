import React, {Component} from 'react';
import QuestPopup from './Understanding_Page/QuestPopup';
import CorrectPopup from './Understanding_Page/CorrectPopup';
import IncorrectPopup from './Understanding_Page/IncorrectPopup';

export default class UnderstandPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      index: 0,
      allQuests: this.props.questions,
      currQuest: this.props.questions[0],
      nextQuest: this.props.questions[1],
      Popups: {
        question: QuestPopup,
        correct: CorrectPopup,
        incorrect: IncorrectPopup
      },
      Popup: QuestPopup
    }
  }

  renderCorrect = () => {
    console.log("testing: renderCorrect()")
    this.setNextQuest();
    this.setState({Popup: CorrectPopup})
  }

  renderIncorrect = () => {
    console.log("testing: renderIncorrect()")
    this.setNextQuest();
    this.setState({ Popup: IncorrectPopup })
  }

  NextPop = (event) => {
    console.log("You're doing something right!")
    console.log("Index= ", this.state.index)
    this.setState({ Popup: QuestPopup, currQuest: this.state.nextQuest })
  }

  setNextQuest = () => {
    console.log("In renderNextQuest()")
    let newIndex = this.state.index;
    newIndex++;
    if (this.state.index === 30) {
      newIndex = 0;
    }
    console.log(newIndex)
    this.setState( {index: newIndex, nextQuest: this.props.questions[newIndex]} );
  }

  render() {
    console.log("Current Question: ", this.state.currQuest.question)
    console.log("Next Question: ", this.state.nextQuest.question)
    return(
      <this.state.Popup nextPop= {this.NextPop}
        currQuest= {this.state.currQuest}
        renderCorrect= {this.renderCorrect}
        renderIncorrect= {this.renderIncorrect} />
    );
  }
}