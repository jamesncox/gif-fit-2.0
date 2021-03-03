import React, {useState} from 'react'

function RestTimeButtonGrid(props) {
    const [ten, setTen] = useState(false)
    const [fifteen, setFifteen] = useState(false)
    const [twenty, setTwenty] = useState(false)
    const [thirty, setThirty] = useState(false)
 
    const handleTen = (e) => {
        setTen(true)
        setFifteen(false)
        setTwenty(false)
        setThirty(false)
    }

    const handleFifteen = (e) => {
        setTen(false)
        setFifteen(true)
        setTwenty(false)
        setThirty(false)
    }

    const handleTwenty = (e) => {
        setTen(false)
        setFifteen(false)
        setTwenty(true)
        setThirty(false)
    }

    const handleThirty = (e) => {
        setTen(false)
        setFifteen(false)
        setTwenty(false)
        setThirty(true)
    }

    return (
        <div className="select-exercise-time-grid">
                <button
                    id="one-number"
                    className={ten ? "selected-button" : "select-button"}
                    onClick={(e) => handleTen(e)}
                    value={10}
                >
                    10 sec
                </button>

                <button
                    id="two-number"
                    className={fifteen ? "selected-button" : "select-button"}
                    onClick={(e) => handleFifteen(e)}
                    value={15}
                >
                    15 sec
                </button> 

                <button
                    id="three-number"
                    className={twenty ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwenty(e)}
                    value={20}
                >
                    20 sec
                </button> 

                <button
                    id="four-number"
                    className={thirty ? "selected-button" : "select-button"}
                    onClick={(e) => handleThirty(e)}
                    value={30}
                >
                    30 sec
                </button>
        </div>
    )

}

export default RestTimeButtonGrid