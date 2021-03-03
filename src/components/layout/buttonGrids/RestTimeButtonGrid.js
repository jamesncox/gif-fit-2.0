import React, {useState} from 'react'
import { connect } from 'react-redux'
import { SET_REST_TIME } from '../../../actionTypes/index'

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
        props.setRestTime(parseInt(e.target.value))
    }

    const handleFifteen = (e) => {
        setTen(false)
        setFifteen(true)
        setTwenty(false)
        setThirty(false)
        props.setRestTime(parseInt(e.target.value))
    }

    const handleTwenty = (e) => {
        setTen(false)
        setFifteen(false)
        setTwenty(true)
        setThirty(false)
        props.setRestTime(parseInt(e.target.value))
    }

    const handleThirty = (e) => {
        setTen(false)
        setFifteen(false)
        setTwenty(false)
        setThirty(true)
        props.setRestTime(parseInt(e.target.value))
    }

    return (
        <div className="select-time-grid">
                <button
                    id="ten-rest"
                    className={ten ? "selected-button" : "select-button"}
                    onClick={(e) => handleTen(e)}
                    value={10000}
                >
                    10 sec
                </button>

                <button
                    id="fifteen-rest"
                    className={fifteen ? "selected-button" : "select-button"}
                    onClick={(e) => handleFifteen(e)}
                    value={15000}
                >
                    15 sec
                </button> 

                <button
                    id="twenty-rest"
                    className={twenty ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwenty(e)}
                    value={20000}
                >
                    20 sec
                </button> 

                <button
                    id="thirty-rest"
                    className={thirty ? "selected-button" : "select-button"}
                    onClick={(e) => handleThirty(e)}
                    value={30000}
                >
                    30 sec
                </button>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    setRestTime: (number) => dispatch({ type: SET_REST_TIME, payload: number })
})

export default connect(null, mapDispatchToProps)(RestTimeButtonGrid)