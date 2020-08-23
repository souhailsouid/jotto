import React, { Component } from 'react';
import { connect } from 'react-redux'
import { guessWord  } from './actions/index'
import './App.css';
import Input from './input'
import GuessedWords from './GuessedWord'
import Congrats from './Congrats'
class App extends Component {
  render() {
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto</h1>

        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord} = state
  return { success, guessedWords, secretWord}
}
export default connect(mapStateToProps, {guessWord })(App);
