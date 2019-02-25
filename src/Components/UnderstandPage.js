import React, {Component} from 'react';
import QuestPopup from './Understanding_Page/QuestPopup';
import CorrectPopup from './Understanding_Page/CorrectPopup';
import IncorrectPopup from './Understanding_Page/IncorrectPopup';

export default class UnderstandPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      allQuests: this.props.questions,
      currQuest: this.props.questions[0],
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
    this.setState({Popup: CorrectPopup})
  }

  renderIncorrect = () => {
    console.log("testing: renderIncorrect()")
    this.setState({ Popup: IncorrectPopup })
  }

  NextPop = (event) => {
    console.log("You're doing something right!")
    this.setState({ Popup: QuestPopup })
  }

  renderIndQuest = () => {
    this.state.questions.forEach((quest, index) => {
      console.log(this.state.questions[index])
    })
  }

  render() {
    console.log("Question: ", this.state.allQuests[0])
    return(
      <this.state.Popup nextPop= {this.NextPop}
        currQuest= {this.state.currQuest}
        renderCorrect= {this.renderCorrect}
        renderIncorrect= {this.renderIncorrect} />
    );
  }
}