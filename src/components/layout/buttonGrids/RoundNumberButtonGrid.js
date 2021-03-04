import React from 'react'
import { connect } from 'react-redux'
import {
    SET_NUMBER_OF_ROUNDS,
    SET_EXERCISE_ROUNDS,
    SET_ROUND_NUMBER_BUTTON
} from '../../../actionTypes'
import RoundNumberData from '../../../data/roundNumberData.json'

function RoundroundButtonGrid(props) {

    const handleChange = (e) => {
        props.setRoundButtonNumber(e.target.value)
        props.setNumberOfRounds(e.target.value)
        props.setExerciseRounds()
    }

    return (
        <div className="select-number-grid">
            {RoundNumberData.map((int, index) => {
                return (
                    console.log(props.roundButtonNumber),
                    <button
                        key={int.id}
                        id={int.id}
                        className={(props.roundNumberButton - 1) === index ? "selected-button" : "select-button"}
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
    roundNumberButton: state.buttonGridStyles.roundNumberButton
})

const mapDispatchToProps = dispatch => ({
    setNumberOfRounds: (number) => dispatch({ type: SET_NUMBER_OF_ROUNDS, payload: number }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS }),
    setRoundButtonNumber: (number) => dispatch({type: SET_ROUND_NUMBER_BUTTON, payload: number })
})

export default connect(mapStateToProps, mapDispatchToProps)(RoundroundButtonGrid)