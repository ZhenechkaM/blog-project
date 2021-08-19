import React from 'react'
import './Section3.css'
import Grid from '@material-ui/core/Grid'

const Section3 = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className=".section3"
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                xs={12}
                sm={7}
                md={7}
                className="section3_part1"
            ></Grid>
            <Grid xs={12} sm={5} md={5} className="section3_part2">
                <div>
                    <h3>Ways of protecting the environment</h3>
                    <div className="horizontal-line"></div>
                    <h6>
                        Donec blandit luctus laoreet. Donec dui arcu dapibus
                    </h6>
                </div>
                <div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        className="margin-top-bottom"
                    >
                        <Grid xs={2} sm={2} md={2} className="one"></Grid>
                        <Grid xs={10} sm={10} md={10}>
                            <p>
                                Etiam finibus auctor sagittis. Phasellus ac
                                tempor odio. Donec scelerisque ullamcorper
                                felis, id sagittis dolor.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        className="margin-top-bottom"
                    >
                        <Grid xs={2} sm={2} md={2} className="two"></Grid>
                        <Grid xs={10} sm={10} md={10}>
                            <p>
                                Nunc tempus porttitor ipsum, quis cursus nisl
                                fringilla non. Cras id eros molestie, iaculis
                                dolor eu, vulputate tellus velit.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        className="margin-top-bottom"
                    >
                        <Grid xs={2} sm={2} md={2} className="three"></Grid>
                        <Grid xs={10} sm={10} md={10}>
                            <p>
                                Proin id molestie lorem, sed venenatis orci.
                                Curabitur a lorem sed sem bibendum porttitor
                                varius sit amet sem.
                            </p>
                        </Grid>
                    </Grid>
                    <button>Read more about us</button>
                </div>
            </Grid>
        </Grid>
    )
}
export default Section3
