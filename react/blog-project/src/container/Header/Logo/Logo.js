import React from 'react'
import './Logo.css'
import Grid from '@material-ui/core/Grid'

const Logo = () => {
    return (
        <Grid item xs={12} sm={3} md={3} className="logo">
            <a href="">
                <img src="https://themes.muffingroup.com/be/eco/wp-content/uploads/2016/04/retina-eco.png" />
            </a>
        </Grid>
    )
}

export default Logo
