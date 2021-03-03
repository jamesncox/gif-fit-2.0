import React, {useRef} from 'react'

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
                <a href="#">No. Exercises</a>
                <a href="#">Exercise Time</a>
                <a href="#">Rest Time</a>
                <a href="#">No. Rounds</a>
            </div>
        </>
    )
}

export default SideNav