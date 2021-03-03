import React, {useRef} from 'react'

function SideNav(props) {
    const navRef = useRef()

    function openNav() {
        navRef.current.style.width = "50%"
    }

    function closeNav() {
        navRef.current.style.width = "0%"
    }

    return (
        <>
            <span className="hamburger" onClick={() => openNav()}>&#9776; open</span>
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