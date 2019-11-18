import React from 'react';
import CardHeader from './cardheader.jsx';
import CardBody from './cardbody.jsx';

class Card extends React.Component {
    render() {
      return (
            <div className="card text-center">
            <CardHeader category={this.props.details.category} image={this.props.details.image}/>
            <CardBody title={this.props.details.title} text={this.props.details.text}/>   
            <div className="card-footer">
       </div>
       </div>
      )
    }
  }

export default Card;



