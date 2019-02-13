import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.handleClickInc = this.handleClickInc.bind(this);
  }

  handleClickInc(event) {    
    this.setState(state => ({
      count: ++state.count
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClickInc}>+</button>        
      </div>
    );
  }
};

ReactDOM.render(
  <Counter />,
  document.querySelector("#content")
);
