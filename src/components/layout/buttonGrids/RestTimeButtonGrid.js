import React from 'react'
import { connect } from 'react-redux'
import { 
    SET_REST_TIME,
    SET_TEN_REST,
    SET_FIFTEEN_REST,
    SET_TWENTY_REST,
    SET_THIRTY_REST, 
} from '../../../actionTypes/index'

function RestTimeButtonGrid(props) {
   
    const handleTen = (e) => {
        props.setTenRest()
        props.setRestTime(parseInt(e.target.value))
    }

    const handleFifteen = (e) => {
        props.setFifteenRest()
        props.setRestTime(parseInt(e.target.value))
    }

    const handleTwenty = (e) => {
        props.setTwentyRest()
        props.setRestTime(parseInt(e.target.value))
    }

    const handleThirty = (e) => {
        props.setThirtyRest()
        props.setRestTime(parseInt(e.target.value))
    }

    return (
        <div className="select-time-grid">
                <button
                    id="ten-rest"
                    className={props.selectedStyles.tenRest ? "selected-button" : "select-button"}
                    onClick={(e) => handleTen(e)}
                    value={10000}
                >
                    10 sec
                </button>

                <button
                    id="fifteen-rest"
                    className={props.selectedStyles.fifteenRest ? "selected-button" : "select-button"}
                    onClick={(e) => handleFifteen(e)}
                    value={15000}
                >
                    15 sec
                </button> 

                <button
                    id="twenty-rest"
                    className={props.selectedStyles.twentyRest ? "selected-button" : "select-button"}
                    onClick={(e) => handleTwenty(e)}
                    value={20000}
                >
                    20 sec
                </button> 

                <button
                    id="thirty-rest"
                    className={props.selectedStyles.thirtyRest ? "selected-button" : "select-button"}
                    onClick={(e) => handleThirty(e)}
                    value={30000}
                >
                    30 sec
                </button>
        </div>
    )

}

const mapStateToProps = state => ({
    selectedStyles: state.selectedStyles
})

const mapDispatchToProps = dispatch => ({
    setRestTime: (number) => dispatch({ type: SET_REST_TIME, payload: number }),
    setTenRest: () => dispatch({ type: SET_TEN_REST}),
    setFifteenRest: () => dispatch({ type: SET_FIFTEEN_REST}),
    setTwentyRest: () => dispatch({ type: SET_TWENTY_REST}),
    setThirtyRest: () => dispatch({ type: SET_THIRTY_REST}),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestTimeButtonGrid)