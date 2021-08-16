import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>I currently practice Gatsby.</p>
            <p><Link to="/contact">Want to explore with me? Reach out.</Link></p>
        </div>
    )
}

export default AboutPage