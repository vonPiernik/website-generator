import React, { Component } from 'react';

// import styles
import './App.css';

// import components
import Builder from './Builder/Builder'
import Preview from './Preview/Preview'
import Generator from './Generator'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Very Freaking Simple Website Generator</h1>
          <h4>by <strong>Norbert Kaźmierczak</strong></h4>
          <hr />

        </header>
        <main>
          <div className="grid grid--main">
            <Builder />
            <Preview />
          </div>
        </main>
            <Generator />
      </div>
    );
  }
}

export default App;