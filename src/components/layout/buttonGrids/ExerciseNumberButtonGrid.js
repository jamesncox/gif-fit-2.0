import React from 'react'
import { connect } from 'react-redux'
import {
    SET_NUMBER_OF_EXERCISES,
    SET_EXERCISE_ROUNDS,
    SET_EXERCISE_NUMBER_BUTTON,
    SET_EXERCISES
} from '../../../actionTypes'
import ExerciseNumberData from '../../../data/exerciseNumberData.json'

function ExerciseNumberButtonGrid(props) {

    const handleChange = (e) => {
        props.setExerciseNumberButton(e.target.value)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    return (
        <div className="select-number-grid">
            {ExerciseNumberData.map((int, index) => {
                return (
                    <button
                        key={int.id}
                        id={int.id}
                        className={props.exerciseNumberButton === int.value ? "selected-button" : "select-button"}
                        onClick={(e) => handleChange(e)}
                        value={int.value}
                    >
                        {int.value}
                    </button>
                )
            })}       
        </div>
    )
}

const mapStateToProps = state => ({
    exerciseNumberButton: state.buttonGridStyles.exerciseNumberButton
})

const mapDispatchToProps = dispatch => ({
    setNumberOfExercises: (number) => dispatch({ type: SET_NUMBER_OF_EXERCISES, payload: number }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS }),
    setExerciseNumberButton: (number) => dispatch({type: SET_EXERCISE_NUMBER_BUTTON, payload: number }),
    setExercises: () => dispatch({ type: SET_EXERCISES })
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseNumberButtonGrid)