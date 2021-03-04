import React from 'react'
import { connect } from 'react-redux'
import { 
    SET_EXERCISE_TIME,
    SET_EXERCISE_TIME_BUTTON
} from '../../../actionTypes/index'
import ExerciseTimeData from '../../../data/exerciseTimeData.json'

function ExerciseTimeButtonGrid(props) {

    const handleChange = (e) => {
        props.setExerciseTime(e.target.value)
        props.setExerciseTimeButton(e.target)
    }

    return (
        <div className="select-time-grid">
               {ExerciseTimeData.map((int, index) => {
                return (
                    <button
                        key={int.id}
                        id={int.id}
                        // cannot read property of "null" exerciseTimeButton.id when nothing selected yet
                        className={props.exerciseTimeButton.id === int.id ? "selected-button" : "select-button"}
                        onClick={(e) => handleChange(e)}
                        value={int.value}
                    >
                        {int.text}
                    </button>
                )
            })}       
        </div>
    )
}

const mapStateToProps = state => ({
    exerciseTimeButton: state.buttonGridStyles.exerciseTimeButton
})

const mapDispatchToProps = dispatch => ({
    setExerciseTime: (number) => dispatch({ type: SET_EXERCISE_TIME, payload: number }),
    setExerciseTimeButton: (number) => dispatch({ type: SET_EXERCISE_TIME_BUTTON, payload: number })
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseTimeButtonGrid)