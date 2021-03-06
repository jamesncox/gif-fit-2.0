import React from 'react'
import {connect} from 'react-redux'
import ImageLoad from '../../hooks/ImageLoad'
import FitnessPreviewImage from '../../assets/images/fitness-preview.png'

function PreviewGifGrid(props) {

    return (
        <div className="preview-gif-grid-wrapper">
            {props.exercises.map (exercise => {
                return (
                    <div  key={exercise.id} className="preview-gif-card">
                        <ImageLoad
                            className="preview-gifs-gif"
                            src={exercise.gif}
                            placeholder={FitnessPreviewImage}
                            alt={exercise.name} 
                        />
                        <p className="preview-gif-text">{exercise.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    exercises: state.params.exercises
})

export default connect(mapStateToProps)(PreviewGifGrid)