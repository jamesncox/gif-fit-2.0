import React, {useRef} from 'react'

function SideNav(props) {
    const navRef = useRef()

    function openNav() {
        navRef.current.style.width = "75%"
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
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </>
    )
}

export default SideNav