import React, {useState} from 'react'
import {connect} from 'react-redux'
import ImageLoad from '../../hooks/ImageLoad'
import FitnessPreviewImage from '../../assets/images/fitness-preview.png'
import Modal from '../../hooks/Modal'

function PreviewGifGrid(props) {
    const [, setShow] = useState(false)

    return (
        <div className="preview-gif-grid-wrapper">
            {props.exercises.map (exercise => {
                return (
                    <Modal
                        key={exercise.id}
                        activator={({ setShow }) => (
                            <div  key={exercise.id} className="preview-gif-card"  onClick={() => setShow(true)}>
                                <ImageLoad
                                    className="preview-gifs-gif"
                                    src={exercise.gif}
                                    placeholder={FitnessPreviewImage}
                                    alt={exercise.name}
                                />
                                <p className="preview-gif-text">{exercise.name}</p>
                            </div>
                        )}
                    >
                        <ImageLoad
                                className="modal-gifs-gif"
                                src={exercise.gif}
                                placeholder={FitnessPreviewImage}
                                alt={exercise.name}
                                onClick={() => setShow(true)}
                        /> 
                        <p className="modal-gif-title">{exercise.name}</p>
                        <p className="modal-gif-text">{exercise.description}</p>                   
                    </Modal>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    exercises: state.params.exercises
})

export default connect(mapStateToProps)(PreviewGifGrid)