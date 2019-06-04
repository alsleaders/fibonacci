import React, { Component } from 'react'

class FibWithClass extends Component {
  state = {
    previousNumber: '0',
    currentNumber: '1',
    count: '1',
    sequence: []
  }

  addFib = () => {
    console.log({ previousNumber })
    // count.push = currentNumber + previousNumber
    this.setState({
      previousNumber: currentNumber,
      currentNumber: count,
      count
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.addFib()}>Next number</button>
      </div>
    )
  }
}

export default FibWithClass
