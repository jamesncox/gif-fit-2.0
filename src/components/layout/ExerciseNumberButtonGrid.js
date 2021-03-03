import React, {useState} from 'react'

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
    }

    return (
        <div className="select-grid">
                <button
                    id="one"
                    className={one ? "selected-button" : "select-button"}
                    onClick={(e) => handleOne(e)}
                    value={1}
                >
                    1
                </button>

                <button
                    id="two"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={2}
                >
                    2
                </button> 

                <button
                    id="three"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={3}
                >
                    3
                </button> 

                <button
                    id="four"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={4}
                >
                    4
                </button> 


                <button
                    id="five"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={5}
                >
                    5
                </button>

                <button
                    id="six"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={6}
                >
                    6
                </button>

                <button
                    id="seven"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={7}
                >
                    7
                </button> 

                <button
                    id="eight"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={8}
                >
                    8
                </button> 

                <button
                    id="nine"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={9}
                >
                    9
                </button> 


                <button
                    id="ten"
                    className="select-button"
                    // onClick={(e) => selectExerciseNumber(e)}
                    value={10}
                >
                    10
                </button> 
        </div>
    )
}

export default ExerciseNumberButtonGrid