import React from 'react'

import Container from '@material-ui/core/Container'
import './Slider.css'
import Grid from '@material-ui/core/Grid'

const Slider = () => {
    return (
        <div className="slider">
            <Container>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={0}
                    className="padding-top-bottom"
                >
                    <h1>
                        Nature always
                        <br /> wears the colors of the spirint
                    </h1>
                    <h6>
                        Duis sed odio sit amet nibh vulputate cursus a sit amet
                        mauris morbi accumsam ipsum velit
                    </h6>
                    <button>Vestibulum ante nullam</button>
                </Grid>
            </Container>
        </div>
    )
}

export default Slider
