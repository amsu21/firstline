import PropTypes from 'prop-types'
import React from 'react'
import vid from '../images/house.mp4'


const BackgroundVideo = () => {
    const vid = "../images/house.mp4"
    return (
        <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={vid} type="video/mp4"></source>
            </video>

        </div>
    )
}

export default BackgroundVideo