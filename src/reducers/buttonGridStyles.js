import {
    CLEAR_BUTTON_GRID_STYLES,
    SET_ROUND_NUMBER_BUTTON
} from '../actionTypes'

export default (state = {
    exerciseNumberButton: null,
    exerciseTimeButton: null,
    restTimeButton: null,
    roundNumberButton: null
}, action) => {
    switch (action.type) {

        case CLEAR_BUTTON_GRID_STYLES:
            return { 
                ...state, 
                exerciseNumberButton: null,
                exerciseTimeButton: null,
                restTimeButton: null,
                roundNumberButton: null
            }

        case SET_ROUND_NUMBER_BUTTON:
            console.log(action.payload)
            return { ...state, roundNumberButton: action.payload }

        default:
            return state
    }
}