import React, {Component} from 'react';
import './neigh_price.css';

class Neighprice extends Component {
  constructor(){
    super();
    this.state = {
      neighprice: []
    }
  }

  componentDidMount(){
    fetch('/api/neighprice')
      .then(res => res.json())
      .then(neighprice => this.setState({neighprice}, () => console.log('Neighprice fetched..', neighprice)));
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <h1>DeniXone</h1>
        <ul>
          {this.state.neighprice.map(neighprice =>
            <li key= {neighprice.id}> {neighprice.firstName} {neighprice.lastName}</li>
            )}
        </ul>
      </div >
    );
  }
}
  export default Neighprice;
