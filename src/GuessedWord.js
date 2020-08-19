import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */

const GuessedWord = (props) => {
    let contents
    if(props.guessedWords.length === 0) {
        contents = (
          <span data-test="guess-instructions">
              Try to guess the word ! 
          </span>
        )
    } else {
        const guessedWordRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td> {word.guessedWord} </td>
                <td> {word.letterMatchCount} </td>
            </tr>
        ))
        contents = (
            <div data-test="guessed-words">
               <h3> Guessed Words </h3>
                <table>
                    <thead>
                        <tr><th>Guess</th></tr>
                        <tr><th>Matching letters</th></tr>
                    </thead>
                    <tbody>
                        { guessedWordRows }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
      <div data-test="component-guessed-words">
        { contents }
      </div>
    )
}

    
GuessedWord.propTypes = { 
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
};
export default GuessedWord