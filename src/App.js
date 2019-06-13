import React, { Component } from 'react';
import HeroList from './components/HeroList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import Topbar from './components/Topbar';

class App extends Component {
  state = {
    heroes: [
      {
        id: 1,
        name: 'Erik',
        age: 24
      },
      {
        id: 2,
        name: 'Jeffrey',
        age: 25
      },
      {
        id: 3,
        name: 'Kirsten',
        age: 20
      }
    ]

  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Heroes</h1>

              <HeroList heroes={this.state.heroes}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
