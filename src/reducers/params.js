import {
    SET_NUMBER_OF_EXERCISES,
    SET_EXERCISE_TIME,
    SET_REST_TIME,
    SET_NUMBER_OF_ROUNDS,
    CLEAR_PARAMS,
    SET_EXERCISES,
    SET_EXERCISE_ROUNDS,
    INCLUDE_DUMBBELLS,
    EXCLUDE_DUMBBELLS
} from '../actionTypes'

import exerciseGifs from '../data/exerciseGifs.json'
import dumbbellGifs from '../data/dumbbells.json'

export default (state = {
    currentData: exerciseGifs,
    numberOfExercises: null,
    exerciseTime: null,
    restTime: null,
    numberOfRounds: null,
    exercises: [],
    exercisesAsRounds: []
}, action) => {
    switch (action.type) {

        case SET_NUMBER_OF_EXERCISES:
            return { ...state, numberOfExercises: parseInt(action.payload) }

        case SET_EXERCISE_TIME:
            return { ...state, exerciseTime: action.payload }

        case SET_REST_TIME:
            return { ...state, restTime: action.payload }

        case SET_NUMBER_OF_ROUNDS:
            return { ...state, numberOfRounds: action.payload }

        case CLEAR_PARAMS:
            return { ...state, numberOfExercises: null, exerciseTime: null, restTime: null, numberOfRounds: null, exercises: [] }

        case SET_EXERCISES:
            function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a.slice(10, state.numberOfExercises + 10);
            }

            const randomExercises = shuffle(state.currentData)
            return { ...state, exercises: randomExercises }

        case SET_EXERCISE_ROUNDS:
            const duplicateArr = (arr, times) =>
                Array(times)
                    .fill([...arr])
                    .reduce((a, b) => a.concat(b))
            const combinedExerciseArrays = duplicateArr(state.exercises, state.numberOfRounds)
            return { ...state, exercisesAsRounds: combinedExerciseArrays }

        case INCLUDE_DUMBBELLS:
            const mergedDumbbellAndexerciseGifs = dumbbellGifs.concat(state.currentData)
            return { ...state, currentData: mergedDumbbellAndexerciseGifs }

        case EXCLUDE_DUMBBELLS:
            return { ...state, currentData: exerciseGifs }

        default:
            return state
    }
}