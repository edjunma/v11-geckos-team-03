import React from "react";

class Card extends React.Component {
  render() {
    return <div className="card">{this.props.cardTitle}</div>;
  }
}

export default Card;
