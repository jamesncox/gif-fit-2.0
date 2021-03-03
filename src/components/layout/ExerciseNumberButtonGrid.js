import React, { useRef }  from 'react'

function ExerciseNumberButtonGrid(props) {
    const selectRef = useRef()

    const selectExerciseNumber = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="select-grid">
                <button
                    ref={selectRef}
                    id="one"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={1}
                >
                    1
                </button>

                <button
                    ref={selectRef}
                    id="two"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={2}
                >
                    2
                </button> 

                <button
                    ref={selectRef}
                    id="three"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={3}
                >
                    3
                </button> 

                <button
                    ref={selectRef}
                    id="four"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={4}
                >
                    4
                </button> 


                <button
                    ref={selectRef}
                    id="five"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={5}
                >
                    5
                </button>

                <button
                    ref={selectRef}
                    id="six"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={6}
                >
                    6
                </button>

                <button
                    ref={selectRef}
                    id="seven"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={7}
                >
                    7
                </button> 

                <button
                    ref={selectRef}
                    id="eight"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={8}
                >
                    8
                </button> 

                <button
                    ref={selectRef}
                    id="nine"
                    className="select-button"
                    onClick={(e) => selectExerciseNumber(e)}
                    value={9}
                >
                    9
                </button> 


                <button
                    ref={selectRef}
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