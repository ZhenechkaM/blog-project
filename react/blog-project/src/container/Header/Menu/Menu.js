import React from 'react'
import './Menu.css'
import Grid from '@material-ui/core/Grid'
import { Link } from '@material-ui/core'

const Menu = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            xs={12}
            sm={7}
            md={7}
            className="menu"
        >
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/programs">Programs</Link>
            </div>
            <div>
                <Link to="/the-company">The company</Link>
            </div>
            <div>
                <Link to="/articles-and-researches">
                    Articles and researches
                </Link>
            </div>
            <div>
                <Link to="/contact-us">Contact us</Link>
            </div>
        </Grid>
    )
}

export default Menu
