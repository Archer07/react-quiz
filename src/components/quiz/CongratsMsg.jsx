import React, {Component} from 'react';
import ReactDOM from 'react-dom';


let CongratsMsg = (props) => {
  return (
    <div className="col-md-6 col-md-offset-2 congrats">
      <div className="alert alert-success">
        <strong>Well done!</strong> You answered all the questions correctly.
      </div>
    </div>
  );
}

export default CongratsMsg
