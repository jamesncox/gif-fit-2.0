import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import DisplaySelections from './DisplaySelections'

function Home(props) {
    return (
        <div className="home-grid-wrapper">
            <WelcomeMessage />
            <DisplaySelections />
        </div>
    )
}

export default Home