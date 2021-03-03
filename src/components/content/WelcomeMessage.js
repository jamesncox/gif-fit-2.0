import React from 'react'

function WelcomeMessage(props) {
    return (
        <div className="welcome-message-wrapper">
            <p className="welcome-title">Let GIF FIT create you a workout today</p>
            <p className="welcome-description">Simply select your parameters</p>
            <ul className="welcome-description">
                <li>Number of exercises</li>
                <li>Exercise Time</li>
                <li>Rest Time</li>
                <li>Number of rounds</li>
            </ul>
            <p className="welcome-description" style={{width: "75%"}}>GIF FIT recommends resting for half the time you exercise (adhering to the Tabata Method). But you can choose any rest time to make a workout more or less challenging.</p>
        </div>
    )
}

export default WelcomeMessage