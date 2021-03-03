import React, {useState} from 'react'

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
    }

    const handleThirty = (e) => {
        setTwenty(false)
        setThirty(true)
        setForty(false)
        setSixty(false)
    }

    const handleForty = (e) => {
        setTwenty(false)
        setThirty(false)
        setForty(true)
        setSixty(false)
    }

    const handleSixty = (e) => {
        setTwenty(false)
        setThirty(false)
        setForty(false)
        setSixty(true)
    }

    return (
        <div className="select-exercise-time-grid">
                <button
                    id="one-number"
                    className={twenty ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwenty(e)}
                    value={20}
                >
                    20 sec
                </button>

                <button
                    id="two-number"
                    className={thirty ? "selected-button" : "select-button"}
                    onClick={(e) => handleThirty(e)}
                    value={30}
                >
                    30 sec
                </button> 

                <button
                    id="three-number"
                    className={forty ? "selected-button" : "select-button"}
                    onClick={(e) => handleForty(e)}
                    value={40}
                >
                    40 sec
                </button> 

                <button
                    id="four-number"
                    className={sixty ? "selected-button" : "select-button"}
                    onClick={(e) => handleSixty(e)}
                    value={60}
                >
                    60 sec
                </button>
        </div>
    )

}

export default ExerciseTimeButtonGrid