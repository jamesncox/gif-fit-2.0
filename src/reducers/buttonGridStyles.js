import {
    CLEAR_BUTTON_GRID_STYLES,
    SET_EXERCISE_NUMBER_BUTTON,
    SET_EXERCISE_TIME_BUTTON,
    SET_REST_TIME_BUTTON,
    SET_ROUND_NUMBER_BUTTON,
} from '../actionTypes'

export default (state = {
    exerciseNumberButton: null,
    exerciseTimeButton: null,
    exerciseTimeIndex: null,
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

        case SET_EXERCISE_NUMBER_BUTTON:
            return { ...state, exerciseNumberButton: action.payload }

        case SET_EXERCISE_TIME_BUTTON:
            return { ...state, exerciseTimeButton: parseInt(action.payload) }

        case SET_REST_TIME_BUTTON:
            return { ...state, restTimeButton: parseInt(action.payload) }

        case SET_ROUND_NUMBER_BUTTON:
            return { ...state, roundNumberButton: action.payload }

        default:
            return state
    }
}