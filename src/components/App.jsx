import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import QuestionList from './quiz/QuestionList.jsx';
import Questions from './quiz/questions.js';
import ScoreBox from './quiz/ScoreBox.jsx';
import CongratsMsg from './quiz/CongratsMsg.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    // hardcoded data
    this.state = {
      questions: Questions,
      score:0,
      current:1
    }
  }
  setCurrent(current) {
    console.log(current);
      this.setState({
        current
      });
  }
  setScore(score) {
    this.setState({score});
  }
  render() {
    let congrats = () => {
      if (this.state.score === this.state.questions.length) {
        return (<CongratsMsg />);
      }
    }
    return (
      <div>
      {
        congrats()
      }
      <ScoreBox {...this.state}/>
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />

      </div>

    );
  }
}

export default App
