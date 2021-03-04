import React from 'react'
import { connect } from 'react-redux'
import {
    SET_NUMBER_OF_EXERCISES,
    SET_EXERCISES,
    SET_EXERCISE_ROUNDS,
    SET_ONE_EX,
    SET_TWO_EX,
    SET_THREE_EX,
    SET_FOUR_EX,
    SET_FIVE_EX,
    SET_SIX_EX,
    SET_SEVEN_EX,
    SET_EIGHT_EX,
    SET_NINE_EX,
    SET_TEN_EX,
} from '../../../actionTypes/index'

function ExerciseNumberButtonGrid(props) {

    const handleOne = (e) => {
        props.setOneEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleTwo = (e) => {
        props.setTwoEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleThree = (e) => {
        props.setThreeEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleFour = (e) => {
        props.setFourEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleFive = (e) => {
        props.setFiveEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleSix = (e) => {
        props.setSixEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleSeven = (e) => {
        props.setSevenEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleEight = (e) => {
        props.setEightEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleNine = (e) => {
        props.setNineEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleTen = (e) => {
        props.setTenEx()
        props.setNumberOfExercises(parseInt(e.target.value))
        props.setExercises()
        props.setExerciseRounds()
    }

    return (
        <div className="select-number-grid">
                <button
                    id="one-number"
                    className={props.selectedStyles.oneEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleOne(e)}
                    value={1}
                >
                    1
                </button>

                <button
                    id="two-number"
                    className={props.selectedStyles.twoEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwo(e)}
                    value={2}
                >
                    2
                </button> 

                <button
                    id="three-number"
                    className={props.selectedStyles.threeEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleThree(e)}
                    value={3}
                >
                    3
                </button> 

                <button
                    id="four-number"
                    className={props.selectedStyles.fourEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleFour(e)}
                    value={4}
                >
                    4
                </button> 


                <button
                    id="five-number"
                    className={props.selectedStyles.fiveEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleFive(e)}
                    value={5}
                >
                    5
                </button>

                <button
                    id="six-number"
                    className={props.selectedStyles.sixEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleSix(e)}
                    value={6}
                >
                    6
                </button>

                <button
                    id="seven-number"
                    className={props.selectedStyles.sevenEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleSeven(e)}
                    value={7}
                >
                    7
                </button> 

                <button
                    id="eight-number"
                    className={props.selectedStyles.eightEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleEight(e)}
                    value={8}
                >
                    8
                </button> 

                <button
                    id="nine=number"
                    className={props.selectedStyles.nineEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleNine(e)}
                    value={9}
                >
                    9
                </button> 


                <button
                    id="ten-number"
                    className={props.selectedStyles.tenEx ? "selected-button" : "select-button"}
                    onClick={(e) => handleTen(e)}
                    value={10}
                >
                    10
                </button> 
        </div>
    )
}

const mapStateToProps = state => ({
    selectedStyles: state.selectedStyles
})

const mapDispatchToProps = dispatch => ({
    setNumberOfExercises: (number) => dispatch({ type: SET_NUMBER_OF_EXERCISES, payload: number }),
    setExercises: () => dispatch({ type: SET_EXERCISES }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS }),
    setOneEx: () => dispatch({ type: SET_ONE_EX }),
    setTwoEx: () => dispatch({ type: SET_TWO_EX }),
    setThreeEx: () => dispatch({ type: SET_THREE_EX }),
    setFourEx: () => dispatch({ type: SET_FOUR_EX }),
    setFiveEx: () => dispatch({ type: SET_FIVE_EX }),
    setSixEx: () => dispatch({ type: SET_SIX_EX }),
    setSevenEx: () => dispatch({ type: SET_SEVEN_EX }),
    setEightEx: () => dispatch({ type: SET_EIGHT_EX }),
    setNineEx: () => dispatch({ type: SET_NINE_EX }),
    setTenEx: () => dispatch({ type: SET_TEN_EX }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseNumberButtonGrid)