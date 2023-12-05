import { Component } from 'react'

export default class Result extends Component {
  render() {
    return (
      <>
      <div id='final'>
        <h2>Result</h2>
         <div id='result-container'>
            <h3>You need more practice!</h3>
            <h1>Your Score is 20%</h1>
            <div id="one">
            <p>Total number of questions attempted</p> 
            <p>15</p>
            </div>
            <div id="two">
            <p>Number of attempted questions </p> 
            <p>9</p>
            </div>
            <div id="three">
            <p>Number of correct answers</p> 
            <p>3</p>
            </div>
            <div id="four">
            <p>Number of wrong answers</p> 
            <p>6</p>
            </div>
        </div>
        <div id="choose">
            <button id="play-again">Play Again</button>
            <button id="back-to-home">Back to Home</button>
        </div>
      </div>
      </>
    )
  }
}
