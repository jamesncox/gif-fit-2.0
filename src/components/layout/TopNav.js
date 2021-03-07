import React from 'react'
import {connect } from 'react-redux'
import ExerciseNumberButtonGrid from './buttonGrids/ExerciseNumberButtonGrid'
import ExerciseTimeButtonGrid from './buttonGrids/ExerciseTimeButtonGrid'
import RestTimeButtonGrid from './buttonGrids/RestTimeButtonGrid'
import RoundNumberButtonGrid from './buttonGrids/RoundNumberButtonGrid'
import DumbbellButtonGrid from './buttonGrids/DumbbellButtonGrid'

function TopNav(props) {
    return (
        <div className="top-nav">
            <h1 className="title">GIF FIT</h1>

        {props.isActive 
            ? 
            <p className="good-luck">Enjoy your workout and don't forget to sweat!</p> 
            // null
            : 
            <div className="nav-flex-wrapper">
                <div className="dropdown">
                    <button className="dropbtn">
                        EXERCISES
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <ExerciseNumberButtonGrid />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">
                        TIME
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <ExerciseTimeButtonGrid />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">
                        REST
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                       <RestTimeButtonGrid />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">
                        ROUNDS
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <RoundNumberButtonGrid />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">
                        DUMBBELLS
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                       <DumbbellButtonGrid />
                    </div>
                </div>

                <a href="#" className="index">INDEX</a>
            </div>}
        </div>
    )
}

const mapStateToProps = state => ({
    isActive: state.isActive.isActive
})

export default connect(mapStateToProps)(TopNav)