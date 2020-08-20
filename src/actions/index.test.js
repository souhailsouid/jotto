import { actionTypes, correctGuess} from './index'

describe('correct guess' , () => {
    const action = correctGuess()
    test(' should action the corect actionTypes' , () => {
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS})
    })
})