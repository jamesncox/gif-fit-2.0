import React from 'react'
import DisplayTimers from './DisplayTimers'
import DisplayGif from './DisplayGif'

function Workout(props) { 

    return (
        <div className="home-grid-wrapper">
            <DisplayTimers />
            <DisplayGif />
        </div>
    )

}

export default Workout