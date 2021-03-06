import React, {useState} from 'react'
import { connect } from 'react-redux'
import {
    INCLUDE_DUMBBELLS,
    EXCLUDE_DUMBBELLS,
    SET_EXERCISES,
    SET_EXERCISE_ROUNDS
} from '../../../actionTypes'

function DumbbellButtonGrid(props) {
    const [yes, setYes] = useState(false)
    const [no, setNo] = useState(true)

    const handleYes = () => {
        setYes(true)
        setNo(false)
        props.includeDumbbells()
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleNo = () => {
        setYes(false)
        setNo(true)
        props.excludeDummbells()
        props.setExercises()
        props.setExerciseRounds()
    }

    return (
        <div className="include-dumbbells">
                return (
                    <button
                        id="yes-dumbbells"
                        className={yes ? "selected-button" : "select-button"}
                        onClick={(e) => handleYes(e)}
                        disabled={yes}
                    >
                        YES
                    </button>

                    <button
                        id="no-dumbbells"
                        className={no ? "selected-button" : "select-button"}
                        onClick={(e) => handleNo(e)}
                        disabled={no}
                    >
                        NO
                    </button>
                )      
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    includeDumbbells: () => dispatch({ type: INCLUDE_DUMBBELLS }),
    excludeDummbells: () => dispatch({ type: EXCLUDE_DUMBBELLS }),
    setExercises: () => dispatch({ type: SET_EXERCISES }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS }),
})

export default connect(null, mapDispatchToProps)(DumbbellButtonGrid)