import React, {Component} from 'react';

class Question extends Component {
  // onSave() {
  //   document.geteledisabled = true;
  //   return;
  // }
  onChange(e) {
    e.preventDefault();
    //console.log('value captured');
    const {setCurrent, setScore, question} = this.props;
    let selected = e.target.value;
    if (selected == question.correct) {setScore(this.props.score+1);}
      setCurrent(this.props.current+1);
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
                  <li><input type="radio" name="answer" ref="answer" onChange={this.onChange.bind(this)} value={choice.id} /> {choice.id}: {choice.text}</li>
                );
              })
            }

          </ul>

        </div>
    );
  }
}

export default Question
