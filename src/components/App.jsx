import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import QuestionList from './quiz/QuestionList.jsx'
import Questions from './quiz/questions.js'


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
    this.setState({
      current
    });
  }
  setScore(score) {
    this.setState({score});
  }
  render() {
    return (
      <div>
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
      </div>
    );
  }
}

export default App
