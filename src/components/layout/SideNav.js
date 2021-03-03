import React, {useRef} from 'react'
import ExerciseNumberButtonGrid from './ExerciseNumberButtonGrid'

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
            <div className="sidenav-wrapper">
                <span className="hamburger" onClick={() => openNav()}>
                    &#9776; 
                </span>
                <h1 className="sidenav-title">
                    GIF FIT
                </h1>
            </div>

            <div id="mySidenav" className="sidenav" ref={navRef}>
                <a className="closebtn" onClick={() => closeNav()}>&times;</a>
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
                        No. Exercises
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <ExerciseNumberButtonGrid />
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
        </>
    )
}

export default SideNav