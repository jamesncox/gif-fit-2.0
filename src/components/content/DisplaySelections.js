import React from 'react'
import { connect } from 'react-redux'

function DisplaySelections(props) {

    const calculateTotalTime = () => {
        let numberOfExercises = props.numberOfExercises
        let numberOfRounds = props.numberOfRounds
        let exerciseTime = props.exerciseTime / 1000
        let restTime = props.restTime / 1000

        let totalTime = (exerciseTime + restTime) * numberOfExercises * numberOfRounds
        let minutes = Math.floor(totalTime / 60)
        let seconds = totalTime % 60
        let formatted = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        return formatted
    }

    return (
        <div className="display-selection-wrapper">
            <p className="display-selection-title">Your Workout</p>
            {props.numberOfExercises ? <p className="display-selection-description">Exercises - {props.numberOfExercises} </p> : null}
            <ul className="display-selection-description">
                {props.exercises.map(exercise => {
                    return <li>{exercise.name}</li>
                })}
            </ul>
        </div>
    )

}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds,
    exercises: state.params.exercises
})

export default connect(mapStateToProps)(DisplaySelections)