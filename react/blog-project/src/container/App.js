import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header.js'
import Slider from './Slider/Slider.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import './App.js'

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Slider />
            <Main />
            <Footer />
        </>
    )
}

export default App
