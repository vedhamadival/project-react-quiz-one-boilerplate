import { Component } from 'react'

export default class Quiz extends Component {
  render() {
    return (
      <>
        <div id='container'>
            <h1>Question</h1>
            <h4>1 of 15</h4>
            <p>which is the only mammal that can jump?</p>
            <div id="optionA">
            <button>Dog</button>
            <button>Elephant</button>
            </div>
            <div id="optionB">
            <button>Goat</button>
            <button>Lion</button>
            </div>
            <div id="select">
                <button id="prev">Previous</button>
                <button id="next">Next</button>
                <button id="quit">Quit</button>
            </div>
        </div>
      </>
    )
  }
}
