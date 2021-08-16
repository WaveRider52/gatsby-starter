import React from 'react'
import { Link } from 'gatsby'


import Footer from '../components/footer'
import Header from "../components/header"

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I currently practice Gatsby.</p>
            <p><Link to="/contact">Want to explore with me? Reach out.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage