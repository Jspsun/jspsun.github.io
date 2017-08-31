import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import {NavBar} from './Components/NavBar.js';
import {SolarPanel} from './Components/SolarPanel.js';
import {AboutMe} from './Components/AboutMe.js';

class App extends Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        <NavBar />
        <SolarPanel />
        <AboutMe />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowX: 'hidden'
  }
});

export default App;