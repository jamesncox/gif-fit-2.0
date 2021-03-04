import React, {useState} from 'react'
import { connect } from 'react-redux'
import {
    SET_NUMBER_OF_ROUNDS,
    SET_EXERCISE_ROUNDS,
} from '../../../actionTypes'
import RoundNumberData from '../../../data/roundNumberData.json'

function RoundroundButtonGrid(props) {
    const [number, setNumber] = useState(null)

    const handleChange = (e) => {
        setNumber(e.target.value)
        props.setNumberOfRounds(e.target.value)
        props.setExerciseRounds()
    }

    return (
        <div className="select-number-grid">
            {RoundNumberData.map((int, index) => {
                return (
                    <button
                        key={int.id}
                        id={int.id}
                        className={(number - 1) === index ? "selected-button" : "select-button"}
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

const mapDispatchToProps = dispatch => ({
    setNumberOfRounds: (number) => dispatch({ type: SET_NUMBER_OF_ROUNDS, payload: number }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS })
})

export default connect(null, mapDispatchToProps)(RoundroundButtonGrid)