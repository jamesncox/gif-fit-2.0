import React, {useState} from 'react'
import { connect } from 'react-redux'
import { SET_EXERCISE_TIME } from '../../../actionTypes/index'

function ExerciseTimeButtonGrid(props) {
    const [twenty, setTwenty] = useState(false)
    const [thirty, setThirty] = useState(false)
    const [forty, setForty] = useState(false)
    const [sixty, setSixty] = useState(false)
 
    const handleTwenty = (e) => {
        setTwenty(true)
        setThirty(false)
        setForty(false)
        setSixty(false)
        props.setExerciseTime(parseInt(e.target.value))
    }

    const handleThirty = (e) => {
        setTwenty(false)
        setThirty(true)
        setForty(false)
        setSixty(false)
        props.setExerciseTime(parseInt(e.target.value))
    }

    const handleForty = (e) => {
        setTwenty(false)
        setThirty(false)
        setForty(true)
        setSixty(false)
        props.setExerciseTime(parseInt(e.target.value))
    }

    const handleSixty = (e) => {
        setTwenty(false)
        setThirty(false)
        setForty(false)
        setSixty(true)
        props.setExerciseTime(parseInt(e.target.value))
    }

    return (
        <div className="select-time-grid">
                <button
                    id="twenty-exercise"
                    className={twenty ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwenty(e)}
                    value={20000}
                >
                    20 sec
                </button>

                <button
                    id="thirty-exercise"
                    className={thirty ? "selected-button" : "select-button"}
                    onClick={(e) => handleThirty(e)}
                    value={30000}
                >
                    30 sec
                </button> 

                <button
                    id="forty-exercise"
                    className={forty ? "selected-button" : "select-button"}
                    onClick={(e) => handleForty(e)}
                    value={40000}
                >
                    40 sec
                </button> 

                <button
                    id="sixty-exercise"
                    className={sixty ? "selected-button" : "select-button"}
                    onClick={(e) => handleSixty(e)}
                    value={60000}
                >
                    60 sec
                </button>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    setExerciseTime: (number) => dispatch({ type: SET_EXERCISE_TIME, payload: number })
})

export default connect(null, mapDispatchToProps)(ExerciseTimeButtonGrid)