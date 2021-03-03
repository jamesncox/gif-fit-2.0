import React, {useRef} from 'react'
import ExerciseNumberButtonGrid from './buttonGrids/ExerciseNumberButtonGrid'
import ExerciseTimeButtonGrid from './buttonGrids/ExerciseTimeButtonGrid'
import RestTimeButtonGrid from './buttonGrids/RestTimeButtonGrid'

function SideNav(props) {
    const navRef = useRef()

    function openNav() {
        navRef.current.style.width = "275px"
    }

    function closeNav() {
        navRef.current.style.width = "0%"
    }

    return (
        <>
            <div className="sidenav-hamburger-wrapper">
                <span className="hamburger" onClick={() => openNav()}>
                    &#9776; 
                </span>
                <h1 className="sidenav-title">
                    GIF FIT
                </h1>
            </div>

            <div id="mySidenav" className="sidenav" ref={navRef}>
                <a className="closebtn" onClick={() => closeNav()}>&times;</a>

                <div className="sidenav-wrapper">
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
                            No. Exercises
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <RestTimeButtonGrid />
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            No. Exercises
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <ExerciseNumberButtonGrid />
                        </div>
                    </div>

                    <a href="#" className="index">INDEX</a>
                </div>
            </div>
        </>
    )
}

export default SideNav