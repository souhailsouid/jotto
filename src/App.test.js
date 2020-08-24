import React from 'react';

import App, { UnconnectedApp } from './App';
import  { shallow } from 'enzyme'
import { storeFactory } from '../test/testUtils'

const setup = (state= {}) =>  {
    const store = storeFactory(state)
    return shallow(<App store={store}  />).dive().dive()
}
describe('redux props' , () => {
  test( 'has access to success state', () => {
    const success = true
    const wrapper = setup({success})
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })
  test( 'has access to secretWord state', () => {
    const secretWord = 'party'
    const wrapper = setup({secretWord})
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })
  test( 'has access to guessedWords state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({guessedWords})
    const guessedWordsProp = wrapper.instance().props.guessedWords
    expect(guessedWordsProp).toBe(guessedWords)
  })
  test( 'getSecretWord action creator is a function  props', () => {
    const wrapper = setup()
    const getSecretWord = wrapper.instance().props.getSecretWord
    expect(getSecretWord).toBeInstanceOf(Function)
  })
  
})

test('`getSecretWord` works on app mount', () => {
    const getSecretWordMock = jest.fn()
    const props = {
        getSecretWord : getSecretWordMock,
        success: false,
        guessedWords: []
    }
    const wrapper = shallow(<UnconnectedApp {...props} />)
    wrapper.instance().componentDidMount()

    const getSecretCallCount = getSecretWordMock.mock.calls.length
    
    expect(getSecretCallCount).toBe(1)
})

