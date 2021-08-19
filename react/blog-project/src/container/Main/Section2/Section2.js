import React from 'react'
import './Section2.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const Section2 = () => {
    return (
        <>
            <section className="section-2">
                <Container>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        className="section2 padding-top-bottom"
                    >
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            className="padding-left-right margin-top-bottom"
                        >
                            <div className="flex-box margin-bottom">
                                <img src="https://themes.muffingroup.com/be/eco/wp-content/uploads/2016/04/home_eco_iconbox1.png" />
                            </div>
                            <div className="margin-bottom">
                                <h4>Vivamus blandit</h4>
                            </div>
                            <div>
                                <p>
                                    Sed ut interdum lectus, eu ultrices mauris.
                                    Aenean eu massa lobortis commodo
                                </p>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            className="padding-left-right margin-top-bottom"
                        >
                            <div className="flex-box margin-bottom">
                                <img src="https://themes.muffingroup.com/be/eco/wp-content/uploads/2016/04/home_eco_iconbox2.png" />
                            </div>
                            <div className="margin-bottom">
                                <h4>Proin enim cras</h4>
                            </div>
                            <div>
                                <p>
                                    Aliquam eleifend magna a mauris lacinia, ut
                                    aliquet elit feugiat. Donec a dapibus dolor
                                </p>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            className="padding-left-right margin-top-bottom"
                        >
                            <div className="flex-box margin-bottom">
                                <img src="https://themes.muffingroup.com/be/eco/wp-content/uploads/2016/04/home_eco_iconbox3.png" />
                            </div>
                            <div className="margin-bottom">
                                <h4>Etiam venenatis</h4>
                            </div>
                            <div>
                                <p>
                                    Curabitur ultrices dui sit amet varius
                                    tincidunt. Nullam ullamcorper ipsum
                                    condimentum
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Section2
