import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
       inputValue:''
    };
  }


  handleInputChange = (event) => {
    const inputValue = event.target.value;
    
    this.setState({inputValue: inputValue});
    console.log(inputValue)
    
  }

  render() {

    
    return (
      <div className="Home">
        {/* Input field for filtering weather data */}
        <input onChange={this.handleInputChange} type='text' placeholder='what are you looking for'></input>
       {this.state.inputValue}
        
        
      </div>
    );
  }
}

export default Home;