import Grid from '@material-ui/core/Grid'
import React from 'react'
import './Button.css'

const Button = () => {
    return (
        <Grid item xs={0} sm={2} md={2} className="buy_now">
            <button>Buy now</button>
        </Grid>
    )
}

export default Button
