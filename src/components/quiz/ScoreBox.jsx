import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class ScoreBox extends Component {

  render() {

    return (
      <div className="container-fluid">
        <div className='col-md-6 col-md-offset-2'>
          <div className='well'>
            Question: {this.props.current} out of {this.props.questions.length} <span className="badge pull-right"><strong>Score: {this.props.score}</strong></span>
          </div>
        </div>

      </div>
    );
  }
}

export default ScoreBox
