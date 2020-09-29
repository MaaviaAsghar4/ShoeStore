import React from 'react';
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
    return (
        <div>
            <h1>ABOUT NIKE</h1>
            <p className='para'>
                Our mission is what drives us to do
                everything possible to expand human
                potential. We do that by creating
                groundbreaking sport innovations, by
                making our products more sustainably,
                by building a creative and diverse
                global team and by making a positive
                impact in communities where we live and
                work.
            </p>
            <p className='para'>
                Based in Beaverton, Oregon, NIKE, Inc. includes 
                the Nike, Converse, and Jordan brands.
            </p>
            <Link className='btn' to='/product'>Explore Products</Link>
        </div>
    )
}

export default About
