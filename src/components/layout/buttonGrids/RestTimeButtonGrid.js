import React from 'react'
import { connect } from 'react-redux'
import { 
    SET_REST_TIME,
    SET_REST_TIME_BUTTON
} from '../../../actionTypes/index'
import RestTimeData from '../../../data/restTimeData.json'

function RestTimeButtonGrid(props) {

    const handleChange = (e) => {
        props.setRestTime(e.target.value)
        props.setRestTimeButton(e.target.value)
    }

    return (
        <div className="select-time-grid">
               {RestTimeData.map( int => {
                return (
                    <button
                        key={int.id}
                        id={int.id}
                        className={props.restTimeButton === int.value ? "selected-button" : "select-button"}
                        onClick={(e) => handleChange(e)}
                        value={int.value}
                        // disabled={props.exerciseTimeButton === int.value ? true : false}
                    >
                        {int.text}
                    </button>
                )
            })}       
        </div>
    )
}

const mapStateToProps = state => ({
    restTimeButton: state.buttonGridStyles.restTimeButton
})

const mapDispatchToProps = dispatch => ({
    setRestTime: (number) => dispatch({ type: SET_REST_TIME, payload: number }),
    setRestTimeButton: (number) => dispatch({ type: SET_REST_TIME_BUTTON, payload: number })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestTimeButtonGrid)