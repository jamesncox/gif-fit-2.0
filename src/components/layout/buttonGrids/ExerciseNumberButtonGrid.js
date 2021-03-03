import React, {useState} from 'react'
import { connect } from 'react-redux'
import {
    SET_NUMBER_OF_EXERCISES,
    SET_EXERCISES,
    SET_EXERCISE_ROUNDS
} from '../../../actionTypes/index'

function ExerciseNumberButtonGrid(props) {

    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    const [seven, setSeven] = useState(false)
    const [eight, setEight] = useState(false)
    const [nine, setNine] = useState(false)
    const [ten, setTen] = useState(false)

    const handleOne = (e) => {
        setOne(true)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
        setNine(false)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleTwo = (e) => {
        setOne(false)
        setTwo(true)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
        setNine(false)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleThree = (e) => {
        setOne(false)
        setTwo(false)
        setThree(true)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
        setNine(false)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleFour = (e) => {
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(true)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
        setNine(false)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleFive = (e) => {
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(true)
        setSix(false)
        setSeven(false)
        setEight(false)
        setNine(false)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleSix = (e) => {
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(true)
        setSeven(false)
        setEight(false)
        setNine(false)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleSeven = (e) => {
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(true)
        setEight(false)
        setNine(false)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleEight = (e) => {
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(true)
        setNine(false)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleNine = (e) => {
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
        setNine(true)
        setTen(false)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    const handleTen = (e) => {
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setSeven(false)
        setEight(false)
        setNine(false)
        setTen(true)
        props.setNumberOfExercises(e.target.value)
        props.setExercises()
        props.setExerciseRounds()
    }

    return (
        <div className="select-number-grid">
                <button
                    id="one-number"
                    className={one ? "selected-button" : "select-button"}
                    onClick={(e) => handleOne(e)}
                    value={1}
                >
                    1
                </button>

                <button
                    id="two-number"
                    className={two ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwo(e)}
                    value={2}
                >
                    2
                </button> 

                <button
                    id="three-number"
                    className={three ? "selected-button" : "select-button"}
                    onClick={(e) => handleThree(e)}
                    value={3}
                >
                    3
                </button> 

                <button
                    id="four-number"
                    className={four ? "selected-button" : "select-button"}
                    onClick={(e) => handleFour(e)}
                    value={4}
                >
                    4
                </button> 


                <button
                    id="five-number"
                    className={five ? "selected-button" : "select-button"}
                    onClick={(e) => handleFive(e)}
                    value={5}
                >
                    5
                </button>

                <button
                    id="six-number"
                    className={six ? "selected-button" : "select-button"}
                    onClick={(e) => handleSix(e)}
                    value={6}
                >
                    6
                </button>

                <button
                    id="seven-number"
                    className={seven ? "selected-button" : "select-button"}
                    onClick={(e) => handleSeven(e)}
                    value={7}
                >
                    7
                </button> 

                <button
                    id="eight-number"
                    className={eight ? "selected-button" : "select-button"}
                    onClick={(e) => handleEight(e)}
                    value={8}
                >
                    8
                </button> 

                <button
                    id="nine=number"
                    className={nine ? "selected-button" : "select-button"}
                    onClick={(e) => handleNine(e)}
                    value={9}
                >
                    9
                </button> 


                <button
                    id="ten-number"
                    className={ten ? "selected-button" : "select-button"}
                    onClick={(e) => handleTen(e)}
                    value={10}
                >
                    10
                </button> 
        </div>
    )
}

const mapStateToProps = state => ({
    exercises: state.params.exercises
})

const mapDispatchToProps = dispatch => ({
    setNumberOfExercises: (number) => dispatch({ type: SET_NUMBER_OF_EXERCISES, payload: number }),
    setExercises: () => dispatch({ type: SET_EXERCISES }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseNumberButtonGrid)