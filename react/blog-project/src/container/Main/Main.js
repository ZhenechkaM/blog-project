import React from 'react'
import Section1 from './Section1/Section1.js'
import Section2 from './Section2/Section2.js'
import Section3 from './Section3/Section3.js'
import Section4 from './Section4/Section4.js'
import { Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage.js'
import ProgramsPage from '../../pages/ProgramsPage/ProgramsPage.js'
import TheCompanyPage from '../../pages/TheCompanyPage/TheCompanyPage.js'
import ArticlesAndResearchesPage from '../../pages/ArticlesAndResearchesPage/ArticlesAndResearchesPage.js'
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage.js'

const Main = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Route path="/home" component={HomePage} />
            <Route path="/programs" component={ProgramsPage} />
            <Route path="/the-company" component={TheCompanyPage} />
            <Route
                path="/articles-andresearches"
                component={ArticlesAndResearchesPage}
            />
            <Route path="/contact-us" component={ContactUsPage} />
        </>
    )
}

export default Main
