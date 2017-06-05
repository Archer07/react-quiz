import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Questions from './quiz/questions.js'


class App extends Component {
  constructor(props) {
    super(props);
    // hardcoded data
    this.state = {
      questions: Questions
    }
  }
  render() {
    return (
      <h1>Test</h1>
    );
  }
}

export default App
