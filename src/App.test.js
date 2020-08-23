import React from 'react';

import App from './App';
import  { shallow } from 'enzyme'
import { storeFactory } from '../test/testUtils'

const setup = (state= {}) =>  {
    const store = storeFactory(state)
    return shallow(<App store={store}  />).dive().dive()
}
describe('redux props' , () => {
  test( 'has access to success props', () => {
    const success = true
    const wrapper = setup({success})
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })
  test( 'has access to secretWord props', () => {
    const secretWord = 'party'
    const wrapper = setup({secretWord})
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })
  test( 'has access to guessedWords props', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({guessedWords})
    const guessedWordsProp = wrapper.instance().props.guessedWords
    expect(guessedWordsProp).toBe(guessedWords)
  })
  test( 'has access to guessedWord function as props', () => {
    const wrapper = setup()
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
  
})

