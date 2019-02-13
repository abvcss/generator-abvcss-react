import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const Button = styled.a`  
  display: inline-block;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 10px;  
  background: #f6f6f6;
  color: #444;
  border: 1px solid #ccc;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  
  ${props => props.primary && css`
    background: #666;
    color: #f6f6f6;
  `}
`;

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
        <Button onClick={this.handleClickInc}>+</Button>        
      </div>
    );
  }
};

ReactDOM.render(
  <Counter />,
  document.querySelector("#content")
);
