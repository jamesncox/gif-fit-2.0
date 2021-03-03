import React from 'react'
import WelcomeMessage from '../content/WelcomeMessage'
import DisplaySelections from '../content/DisplaySelections'

function Home(props) {
    return (
        <div className="home-grid-wrapper">
            <WelcomeMessage />
            <DisplaySelections />
        </div>
    )
}

export default Home