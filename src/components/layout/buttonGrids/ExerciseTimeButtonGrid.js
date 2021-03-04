import React from 'react'
import { connect } from 'react-redux'
import { 
    SET_EXERCISE_TIME,
    SET_TWENTY_EX,
    SET_THIRTY_EX,
    SET_FORTY_EX,
    SET_SIXTY_EX,
} from '../../../actionTypes/index'

function ExerciseTimeButtonGrid(props) {

    const handleTwenty = (e) => {
        props.setTwentyEx()
        props.setExerciseTime(parseInt(e.target.value))
    }

    const handleThirty = (e) => {
        props.setThirtyEx()
        props.setExerciseTime(parseInt(e.target.value))
    }

    const handleForty = (e) => {
        props.setFortyEx()
        props.setExerciseTime(parseInt(e.target.value))
    }

    const handleSixty = (e) => {
        props.setSixtyEx()
        props.setExerciseTime(parseInt(e.target.value))
    }

    return (
        <div className="select-time-grid">
                <button
                    id="twenty-exercise"
                    className={props.selectedStyles.twentyEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwenty(e)}
                    value={20000}
                >
                    20 sec
                </button>

                <button
                    id="thirty-exercise"
                    className={props.selectedStyles.thirtyEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleThirty(e)}
                    value={30000}
                >
                    30 sec
                </button> 

                <button
                    id="forty-exercise"
                    className={props.selectedStyles.fortyEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleForty(e)}
                    value={40000}
                >
                    40 sec
                </button> 

                <button
                    id="sixty-exercise"
                    className={props.selectedStyles.sixtyEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleSixty(e)}
                    value={60000}
                >
                    60 sec
                </button>
        </div>
    )

}

const mapStateToProps = state => ({
    selectedStyles: state.selectedStyles
})

const mapDispatchToProps = dispatch => ({
    setExerciseTime: (number) => dispatch({ type: SET_EXERCISE_TIME, payload: number }),
    setTwentyEx: () => dispatch({ type: SET_TWENTY_EX }),
    setThirtyEx: () => dispatch({ type: SET_THIRTY_EX }),
    setFortyEx: () => dispatch({ type: SET_FORTY_EX }),
    setSixtyEx: () => dispatch({ type: SET_SIXTY_EX }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseTimeButtonGrid)