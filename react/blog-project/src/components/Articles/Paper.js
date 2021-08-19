import React from 'react'
import PropTypes from 'prop-types'

const Paper = ({ image, date, name }) => {
    return (
        <>
            <img src={image} />
            <div>{date}</div>
            <h2>{name}</h2>
        </>
    )
}
Paper.propTypes = {
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}
export default Paper
