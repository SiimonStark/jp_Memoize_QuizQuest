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
    this.setNextQuest();
    this.setState({Popup: CorrectPopup})
  }

  renderIncorrect = () => {
    this.setNextQuest();
    this.setState({ Popup: IncorrectPopup })
  }

  NextPop = (event) => {
    this.setState({ Popup: QuestPopup, currQuest: this.state.nextQuest })
  }

  setNextQuest = () => {
    let newIndex = this.state.index;
    newIndex++;
    if (this.state.index === 30) {
      newIndex = 0;
    }
    this.setState( {index: newIndex, nextQuest: this.props.questions[newIndex]} );
  }

  render() {
    return(
      <this.state.Popup nextPop= {this.NextPop}
        currQuest= {this.state.currQuest}
        renderCorrect= {this.renderCorrect}
        renderIncorrect= {this.renderIncorrect} />
    );
  }
}