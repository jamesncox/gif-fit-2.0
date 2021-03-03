import React from 'react'

function ExerciseNumberButtonGrid(props) {

    const selectExerciseNumber = (e) => {
        console.log(e.target)
    }

    return (
        <div className="select-grid">
                <button
                    id="one"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={1}
                >
                    1
                </button>

                <button
                    id="two"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={2}
                >
                    2
                </button> 

                <button
                    id="three"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={3}
                >
                    3
                </button> 

                <button
                    id="four"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={4}
                >
                    4
                </button> 


                <button
                    id="five"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={5}
                >
                    5
                </button>

                <button
                    id="six"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={6}
                >
                    6
                </button>

                <button
                    id="seven"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={7}
                >
                    7
                </button> 

                <button
                    id="eight"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={8}
                >
                    8
                </button> 

                <button
                    id="nine"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={9}
                >
                    9
                </button> 


                <button
                    id="ten"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={10}
                >
                    10
                </button> 
        </div>
    )
}

export default ExerciseNumberButtonGrid