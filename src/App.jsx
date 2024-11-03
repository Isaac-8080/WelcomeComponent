import React, { Component } from 'react'
import './App.css'

function App() {

  return (
    <>
      <WelcomeComponent name='Codetrain Africa' />
    </>
  )

}

export default App

class WelcomeComponent extends Component {

  render() {
    return (
      <>
        <h1>{this.props.name} is awesome, react works!!!!</h1>
      </>
    )
  }
}