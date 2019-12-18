import React from "react";

export default class Form extends React.Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    tel_Number: "",
    password: ""
  };

  change = (e) => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    // console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      tel_Number: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      tel_Number: "",
      password: ""

  });
};

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          // onChange={e=> this.setState({ firstName: e.target.value})}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          // onChange={e=> this.setState({ lasttName: e.target.value})}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="username"
          placeholder="User name"
          value={this.state.username}
          onChange={e => this.change(e)}
        // onChange={e=> this.setState({ username: e.target.value})}
        />
        <br />
        <br />
        <input
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={e => this.change(e)}
        // onChange={e=> this.setState({ email: e.target.value})}
        />
        <br />
        <br />
        <input
          name="tel_Number"
          placeholder="tel_Number"
          value={this.state.tel_Number}
          onChange={e => this.change(e)}
        // onChange={e=> this.setState({ tel_Number: e.target.value})}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={e => this.change(e)}
        // onChange={e=> this.setState({ password: e.target.value})}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}