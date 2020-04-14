import React from 'react';
import './CharCounter.css'

class CharCounter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value : ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <ul className="Count-column">
              <li>Characters = {this.state.value.length}</li>
              <li>Words = {this.state.value.split(" ").length - 1}</li>
              <li>Sentences = {this.state.value.split(".").length -1}</li>
              <li>Paragraphs = {this.state.value.split("\n\n").length -1}</li>
            </ul>        
          </div>
          <div className="Text-area">
            <textarea id='text' value={this.state.handleChange} onChange={this.handleChange} placeholder="Type text here!" rows="25" autofocus>

            </textarea>
          </div>
        </header>
      </div>
    );
  }
  
}

export default CharCounter;