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
        props.setExerciseTimeButton(e.target.value)
    }

    return (
        <div className="select-time-grid">
               {ExerciseTimeData.map( int => {
                return (
                    <button
                        key={int.id}
                        id={int.id}
                        className={props.exerciseTimeButton === int.value ? "selected-button" : "select-button"}
                        onClick={(e) => handleChange(e)}
                        value={int.value}
                         disabled={props.exerciseTimeButton === int.value}
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