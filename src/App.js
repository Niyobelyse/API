// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       result2:[]
//     }
//   }
  
//   async componentDidMount()
//   {
//     const result=await fetch("https://api.openweathermap.org/data/2.5/forecast?q=kigali&appid=1383c1ef39cccbbc106d269850cfc481")
//     const result2=await result.json()
//     this.setState([result2])
//   }
  
//   handleInputChange = (event) => {
//     console.log(event.target.value);
//   }
  
//   render(){
//     console.log('render called');
//     return (
//       <div className="App">
//         <input onChange={this.handleInputChange} type='text' placeholder='what are looking for'></input>
//         {this.state.result2.list &&   this.state.result2.list.map(res=>{
//           return <p className='prag'>{res.weather[0].id}</p>
          
//         })}
//         <button className="btn" onClick={this.message} >Click Me</button> 
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // Define the initial state of the component
    this.state = {
      result2: [], // array to hold the weather data
      isLoading: true, // boolean to indicate if data is being loaded or not
      //filteredData: [] // array to hold the filtered weather data
      inputValue:''
    };
  }

  // Use the componentDidMount lifecycle method to fetch the weather data
  async componentDidMount() {
    const result = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=kigali&appid=1383c1ef39cccbbc106d269850cfc481");
    const result2 = await result.json();
    // Update the component state with the fetched data and set isLoading to false
    this.setState({ result2: result2.list, isLoading: false });
  }

  // Define a handler for the input change event
  handleInputChange = (event) => {
    const inputValue = event.target.value;
    
    this.setState({inputValue: inputValue});
  }

  render() {
     let filteredData=null
    filteredData = this.state.result2.filter(res => {
      return res.weather[0].description.toLowerCase().includes(this.state.inputValue.toLowerCase()); // Filter based on weather description
    });
    console.log('render called');
    return (
      <div className="App">
        {/* Input field for filtering weather data */}
        <input onChange={this.handleInputChange} type='text' placeholder='what are you looking for'></input><br></br><br></br><br></br>
        
        {/* Conditional rendering based on whether data is being loaded or not */}
        {this.state.isLoading ? (
          <p className="border" role="status">
            <span className="sr-only">Loading...</span>
          </p>
        ) : (
          // Display the weather data as a list of weather conditions
          
           filteredData.map(res => {
            return <p className='prag' style={{fontFamily:'sans-serif',fontSize:"20px",color: "white", display:'inline-flex'}}>{res.weather[0].description}</p>
          })
        )}
      </div>
    );
  }
}

export default App;





