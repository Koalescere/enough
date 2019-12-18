import React, {Component} from "react";
import logo from "./logo.svg";
import Form from "./5Form"
// import database from ../dataB/database

// import { ReactComponent } from "*.svg";

// function App() {
//   return <Form />;
// }
class App extends Component {

  state= {
    fields: {}
  };

  // onSubmit = fields =>{
    // this.setState({fields});
    onChange = updatedValue =>{
    this.setState({ 
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });  
    // console.log("App comp got: ", fields);
  };


  render() {
    return (
      <div className="App">
        {/* <Form onSubmit={fields =>this.onSubmit(fields)}/> */}
        <Form onChange={fields =>this.onChange(fields)}/>
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to DeniXone</h2>
        </div>
        <p className="App-into">
          To get started, edit <code>src/App.js</code>and save to reload.
      </p> */}
      </div>
    );
  }

}
export default App;
