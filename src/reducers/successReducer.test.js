import {actionTypes} from '../actions'
import successReducer from './successReducer'

describe('successReducer', () => {
    test('should return false state by default if no action CORRECT_GUESS calls', () => {
        const newState = successReducer(undefined, {})
        expect(newState).toBe(false)
    })
    test('should return true state if  action CORRECT_GUESS calls', () => {
        const newState = successReducer( undefined,  {type: actionTypes.CORRECT_GUESS})
        expect(newState).toBe(true)
    })
})