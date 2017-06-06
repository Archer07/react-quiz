import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Question extends Component {
  // onSave() {
  //   document.geteledisabled = true;
  //   return;
  // }
  onChange() {
    return;
  }
  render() {
    const {question} = this.props;
    return (
        <div className="well">
          <h3><strong>{question.id}</strong>: {question.question}</h3>
          <ul className="list-group questions">
            {
              question.choices.map((choice) => {
                return (
                  <li><input type="radio" name="answer" onChange={this.onChange.bind(this)} value={choice.id}/> {choice.id}: {choice.text}</li>
                );
              })
            }

          </ul>

        </div>
    );
  }
}

export default Question
