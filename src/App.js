import React, { Component } from 'react';
import HeroList from './components/HeroList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import Topbar from './components/Topbar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      heroes: [],
    };
  }

  componentDidMount() {
    fetch('https://www.superheroapi.com/api.php/2797859690255716/search/man')
    .then(res => {
      return res.json()
    })
    .then(data => {
      let heroes = data.results
      this.setState({heroes: heroes})
    })

  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="site-title">Heroes</h1>
            </div>

            <HeroList heroes={this.state.heroes}/>

            
          </div>
        </div>
      </div>
    );
  }
  
}



export default App;
