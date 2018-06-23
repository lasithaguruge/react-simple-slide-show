import React, { Children, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main>  
          <h1>Hello World</h1>
        </Main>
      </div>
    );
  }
}

export default App;
