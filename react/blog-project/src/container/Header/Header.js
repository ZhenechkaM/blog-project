import React from 'react'
import './Header.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Logo from './Logo/Logo.js'
import Menu from './Menu/Menu.js'
import Button from './Button/Button.js'

const Header = () => {
    return (
        <>
            <CssBaseline />
            <div className="header">
                <Container>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                    >
                        <Logo />
                        <Menu />
                        <Button />
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Header
