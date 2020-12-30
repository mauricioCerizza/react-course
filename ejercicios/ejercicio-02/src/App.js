import './App.css';
import { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: '',
    length: 0
  }

  textChangedHandler = (event) => {
    this.setState({
      text: event.target.value,
      length: event.target.value.length
    });
  }

  letterClickedHandler = (index) => 
  {
    const charArray = this.state.text.split('')
    charArray.splice(index, 1)
    const newText = charArray.join('')

    this.setState(
      {
        text: newText
      }
    )
  }

  render() {
    const letters = this.state.text.split('').map((char, index) => {
      return <CharComponent letter={char} key={index} onClick={() => this.letterClickedHandler(index)}></CharComponent> 
    })

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input onChange={this.textChangedHandler} value={this.state.text}></input>
        <p text={this.state.text}></p>
        <p>Length: {this.state.length}</p>
        <ValidationComponent textLength={this.state.length}></ValidationComponent>        
        {letters}
      </div>
    );
  }   
}

export default App;
