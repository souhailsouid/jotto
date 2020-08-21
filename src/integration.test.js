import {storeFactory} from '../test/testUtils'
import {guessWord} from './actions'



describe('guessWord action dispatcher', () => {
    const secretWord = 'party'
    const unsuccessfullGuess = 'train'
    describe('no guessed words', () => {
        let store 
        const initialState = { secretWord }
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('updates state correctly for unsuccessfull guess', () => {
            store.dispatch(guessWord(unsuccessfullGuess))
            const newState = store.getState()
            console.log(newState)
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords : [{
                    guessedWord: unsuccessfullGuess,
                    letterMatchCount: 3
                }]      
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for successfull guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [ {
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState)
        })

    })
    describe('some guessed words', () => {
        let store
        const guessedWords = [{guessedWord : 'agile', letterMatchCount: 1}]
        const initialState =  { guessedWords, secretWord }
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('updates state correctly for unsuccessfull guess', () => {
            store.dispatch(guessWord(unsuccessfullGuess))
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: false,
                guessedWords : [ 
                    ...guessedWords,
                    {
                      guessedWord: unsuccessfullGuess,
                      letterMatchCount: 3
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for successfull guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: true,
                guessedWords : [ 
                    ...guessedWords,
                    {
                      guessedWord: secretWord,
                      letterMatchCount: 5
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
        })
    })
