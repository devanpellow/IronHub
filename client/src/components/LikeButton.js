import React, { Component } from "react";
// import ReactDOM from "react-dom";

export default class LikeButton extends Component {
  render() {
    const label = this.props.liked ? "Unlike" : "Like";
    return (
      <div className="customContainer">
        <button className="btn btn-primary" onClick={this.props.handleClick}>
          {label}
        </button>
      </div>
    );
  }
}

//ReactDOM.render(<LikeButton />, document.getElementById("example"));
