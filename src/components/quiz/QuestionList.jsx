import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';


class QuestionList extends Component {

  render() {

    return (
      <div className="container-fluid">
        <div className='col-md-6 col-md-offset-2'>
        {
          this.props.questions.map(question => {
          if (question.id == this.props.current) {return <Question question={question} key={question.id} {...this.props} />;}
        })
        }
        </div>

      </div>
    );
  }
}

export default QuestionList
