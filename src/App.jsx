import React, { Component } from 'react'
import './App.css'

function App() {

  return (
    <>
      <WelcomeComponent />
    </>
  )

}

export default App

class WelcomeComponent extends Component {

  render() {
    return (
      <>
        <h1>Codetrain is awesome, react works!!!!</h1>
      </>
    )
  }
}