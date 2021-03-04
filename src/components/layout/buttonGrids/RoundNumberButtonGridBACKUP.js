import React, {useState} from 'react'
import { connect } from 'react-redux'
import {
    SET_NUMBER_OF_ROUNDS,
    SET_EXERCISE_ROUNDS,
} from '../../../actionTypes'

function RoundroundButtonGrid(props) {

    // const [one, setOne] = useState(false)
    // const [two, setTwo] = useState(false)
    // const [three, setThree] = useState(false)
    // const [four, setFour] = useState(false)
    // const [five, setFive] = useState(false)
    // const [six, setSix] = useState(false)
    // const [seven, setSeven] = useState(false)
    // const [eight, setEight] = useState(false)
    // const [nine, setNine] = useState(false)
    // const [ten, setTen] = useState(false)

    // const handleOne = (e) => {
    //     setOne(true)
    //     setTwo(false)
    //     setThree(false)
    //     setFour(false)
    //     setFive(false)
    //     setSix(false)
    //     setSeven(false)
    //     setEight(false)
    //     setNine(false)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleTwo = (e) => {
    //     setOne(false)
    //     setTwo(true)
    //     setThree(false)
    //     setFour(false)
    //     setFive(false)
    //     setSix(false)
    //     setSeven(false)
    //     setEight(false)
    //     setNine(false)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleThree = (e) => {
    //     setOne(false)
    //     setTwo(false)
    //     setThree(true)
    //     setFour(false)
    //     setFive(false)
    //     setSix(false)
    //     setSeven(false)
    //     setEight(false)
    //     setNine(false)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleFour = (e) => {
    //     setOne(false)
    //     setTwo(false)
    //     setThree(false)
    //     setFour(true)
    //     setFive(false)
    //     setSix(false)
    //     setSeven(false)
    //     setEight(false)
    //     setNine(false)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleFive = (e) => {
    //     setOne(false)
    //     setTwo(false)
    //     setThree(false)
    //     setFour(false)
    //     setFive(true)
    //     setSix(false)
    //     setSeven(false)
    //     setEight(false)
    //     setNine(false)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleSix = (e) => {
    //     setOne(false)
    //     setTwo(false)
    //     setThree(false)
    //     setFour(false)
    //     setFive(false)
    //     setSix(true)
    //     setSeven(false)
    //     setEight(false)
    //     setNine(false)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleSeven = (e) => {
    //     setOne(false)
    //     setTwo(false)
    //     setThree(false)
    //     setFour(false)
    //     setFive(false)
    //     setSix(false)
    //     setSeven(true)
    //     setEight(false)
    //     setNine(false)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleEight = (e) => {
    //     setOne(false)
    //     setTwo(false)
    //     setThree(false)
    //     setFour(false)
    //     setFive(false)
    //     setSix(false)
    //     setSeven(false)
    //     setEight(true)
    //     setNine(false)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleNine = (e) => {
    //     setOne(false)
    //     setTwo(false)
    //     setThree(false)
    //     setFour(false)
    //     setFive(false)
    //     setSix(false)
    //     setSeven(false)
    //     setEight(false)
    //     setNine(true)
    //     setTen(false)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }

    // const handleTen = (e) => {
    //     setOne(false)
    //     setTwo(false)
    //     setThree(false)
    //     setFour(false)
    //     setFive(false)
    //     setSix(false)
    //     setSeven(false)
    //     setEight(false)
    //     setNine(false)
    //     setTen(true)
    //     props.setNumberOfRounds(parseInt(e.target.value))
    //     props.setExerciseRounds()
    // }
    
    const [number, setNumber] = useState(null);

    const oneThruTen = [
        {
            id: "one-round",
            value: 1,
        },
        {
            id: "two-round",
            value: 2
        },
        {
            id: "three-round",
            value: 3,
        },
        {
            id: "four-round",
            value: 4
        },
        {
            id: "five-round",
            value: 5
        },
        {
            id: "six-round",
            value: 6,
        },
        {
            id: "seven-round",
            value: 7
        },
        {
            id: "eight-round",
            value: 8,
        },
        {
            id: "nine-round",
            value: 9
        },
        {
            id: "ten-round",
            value: 10
        },
    ]

    const handleChange = (e) => {
        setNumber(e.target.value)
        props.setNumberOfRounds(e.target.value)
        props.setExerciseRounds()
    }

    return (
        <div className="select-number-grid">
            {oneThruTen.map((int, index) => {
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

                {/* <button
                    id="one-round"
                    className={one ? "selected-button" : "select-button"}
                    onClick={(e) => handleOne(e)}
                    value={1}
                >
                    1
                </button>

                <button
                    id="two-round"
                    className={two ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwo(e)}
                    value={2}
                >
                    2
                </button> 

                <button
                    id="three-round"
                    className={three ? "selected-button" : "select-button"}
                    onClick={(e) => handleThree(e)}
                    value={3}
                >
                    3
                </button> 

                <button
                    id="four-round"
                    className={four ? "selected-button" : "select-button"}
                    onClick={(e) => handleFour(e)}
                    value={4}
                >
                    4
                </button> 


                <button
                    id="five-round"
                    className={five ? "selected-button" : "select-button"}
                    onClick={(e) => handleFive(e)}
                    value={5}
                >
                    5
                </button>

                <button
                    id="six-round"
                    className={six ? "selected-button" : "select-button"}
                    onClick={(e) => handleSix(e)}
                    value={6}
                >
                    6
                </button>

                <button
                    id="seven-round"
                    className={seven ? "selected-button" : "select-button"}
                    onClick={(e) => handleSeven(e)}
                    value={7}
                >
                    7
                </button> 

                <button
                    id="eight-round"
                    className={eight ? "selected-button" : "select-button"}
                    onClick={(e) => handleEight(e)}
                    value={8}
                >
                    8
                </button> 

                <button
                    id="nine=round"
                    className={nine ? "selected-button" : "select-button"}
                    onClick={(e) => handleNine(e)}
                    value={9}
                >
                    9
                </button> 


                <button
                    id="ten-round"
                    className={ten ? "selected-button" : "select-button"}
                    onClick={(e) => handleTen(e)}
                    value={10}
                >
                    10
                </button>  */}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setNumberOfRounds: (number) => dispatch({ type: SET_NUMBER_OF_ROUNDS, payload: number }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS })
})

export default connect(null, mapDispatchToProps)(RoundroundButtonGrid)