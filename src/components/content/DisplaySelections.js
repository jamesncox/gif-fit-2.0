import React from 'react'
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { 
    CLEAR_PARAMS,
    CLEAR_BUTTON_GRID_STYLES
} from '../../actionTypes/index'
import PreviewGifGrid from '../gifs/PreviewGifGrid'

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

    const handleClearParams = () => {
        props.clearParams()
        props.clearButtonGridSelections()
    }

    return (
        <div className="display-selection-wrapper">
            <p className="display-selection-title">
                Your Workout
                {props.numberOfExercises || props.exerciseTime || props.restTime || props.numberOfRounds ? <button className="workout-btn" onClick={handleClearParams}>CLEAR</button> : null}
                {props.numberOfExercises && props.exerciseTime && props.restTime && props.numberOfRounds ? <RouterLink to="/workout"><button className="workout-btn">GO !</button></RouterLink> : null}
            </p>
            {props.numberOfExercises ? <p className="display-selection-category" style={{marginTop: "-.25rem"}}>EXERCISES</p> : null}
            <PreviewGifGrid />
            {props.exerciseTime ? <p className="display-selection-category">EXERCISE TIME</p> : null}
            {props.exerciseTime ? <p className="display-selection-description">{props.exerciseTime / 1000} seconds</p> : null}
            {props.restTime ? <p className="display-selection-category">Rest Time</p> : null}
            {props.restTime ? <p className="display-selection-description">{props.restTime / 1000} seconds</p> : null}
            {props.numberOfRounds ? <p className="display-selection-category">Number of Rounds</p> : null}
            {props.numberOfRounds ? <p className="display-selection-description">{props.numberOfRounds}</p> : null}
            {props.numberOfExercises && props.exerciseTime && props.restTime && props.numberOfRounds ? <p className="display-selection-time">TOTAL TIME: {calculateTotalTime()}</p> : null}
        </div>
    )

}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds,
    exercises: state.params.exercises,
})

const mapDispatchToProps = dispatch => ({
    clearParams: () => dispatch({type: CLEAR_PARAMS}),
    clearButtonGridSelections: () => dispatch({type: CLEAR_BUTTON_GRID_STYLES})
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySelections)