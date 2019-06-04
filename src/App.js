import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import FibWithClass from './components/FibWithClass'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <FibWithClass />
      </>
    )
  }
}

export default App
