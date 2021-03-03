import React from 'react'
import ExerciseNumberButtonGrid from './buttonGrids/ExerciseNumberButtonGrid'
import ExerciseTimeButtonGrid from './buttonGrids/ExerciseTimeButtonGrid'
import RestTimeButtonGrid from './buttonGrids/RestTimeButtonGrid'
import RoundNumberButtonGrid from './buttonGrids/RoundNumberButtonGrid'

function TopNav(props) {
    return (
        <div className="top-nav">
            <h1 className="title">GIF FIT</h1>

            <div className="nav-flex-wrapper">
                <div className="dropdown">
                    <button className="dropbtn">
                        No. Exercises
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <ExerciseNumberButtonGrid />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">
                        Exercise Time
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <ExerciseTimeButtonGrid />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">
                        Rest Time
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                       <RestTimeButtonGrid />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">
                        No. Rounds
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <RoundNumberButtonGrid />
                    </div>
                </div>

                <a href="#" className="index">INDEX</a>
            </div>
        </div>
    )
}

export default TopNav