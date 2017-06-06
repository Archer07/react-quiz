import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';


class QuestionList extends Component {
  render() {
    return (
      <div>
        <h1>QuestionList</h1>
        <Question/>
      </div>
    );
  }
}

export default QuestionList
