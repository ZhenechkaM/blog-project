import { Container, Grid } from '@material-ui/core'
import React from 'react'
import './Section4.css'
import Articles from '../../../components/Articles/Articles.js'

const Section4 = () => {
    return (
        <>
            <Container className="section4">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className="padding-top-bottom"
                >
                    <h1>Fusce rutrum volutpat faucibus</h1>

                    <p>
                        Onceptos himenaeos. Mauris in erat justo. Nullam ac urna
                        eu felis dapibus condimentum sit amet a augue. Sed non
                        neque elit. Sed ut imperdiet nisi. Proin condimentum
                        fermentum nunc. Etiam pharetra, erat sed fermentum
                        feugiat, velit mauris egestas quam, ut aliquam massa
                        nisl quis neque. Suspendisse in orci enim.
                    </p>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Articles />
                </Grid>
            </Container>
        </>
    )
}
export default Section4
