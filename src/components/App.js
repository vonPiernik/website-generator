import React, { Component } from 'react';

// import styles
import './App.css';

// import components
import Builder from './Builder/Builder' 
import Preview from './Preview/Preview'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Cholernie prosty generator stron</h1>
          <h4>autor: <strong>Norbert Kaźmierczak, <a href="http://webnis.pl/" target="_BLANK">WEBNIS</a></strong></h4>
          <hr />

        </header>
        <main>
          <div className="grid grid--main">
            <Builder />
            <Preview />
            
          </div>
        </main>
      </div>
    );
  }
}

export default App;