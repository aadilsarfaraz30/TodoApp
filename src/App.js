import React, { Component } from 'react';
import classes from './App.module.css';
import List from './container/List';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <h1>ToDo App</h1>
        </header>  
        <List/>
      </div>
    );
  }
}

export default App;
