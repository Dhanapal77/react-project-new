import React from 'react';

class Button extends React.Component {
  msg(){
    alert("you have liked the NEWS!!!! See More for your interest");
  }
    render() {
      return (
        <button className="btn btn-primary" onClick={this.msg}>Like
        </button>
      )
    }
  }

  export default Button;
