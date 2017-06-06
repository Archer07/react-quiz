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
  render() {
    return (
      <div>
        <h1>Test</h1>
        <QuestionList />
      </div>
    );
  }
}

export default App
