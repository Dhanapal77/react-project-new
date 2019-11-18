import React from 'react';
import Button from './button.jsx'

class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">Nov 17 2019</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          <Button />
          </div>
      
      )
    }
  }

  export default CardBody;