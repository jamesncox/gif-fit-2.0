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
                        className={props.exerciseTimeIndex === index ? "selected-button" : "select-button"}
                        onClick={(e) => handleChange(e)}
                        value={int.value}
                        index={int.index}
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
    setExerciseTimeButton: (target) => dispatch({ type: SET_EXERCISE_TIME_BUTTON, payload: target })
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseTimeButtonGrid)