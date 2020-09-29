import React from 'react';
import BgImg from '../../images/Nike-BG.jpg';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div>
            <header>
                <div>
                    <img src={BgImg} className='cover-img' alt='Nike Background' />
                    <h1>Just Do It</h1>
                    <h2>See the Latest Arrival</h2>
                    <Link className='btn' to='product'>Shoe Store</Link>
                </div>
            </header>
        </div>
    )
}

export default Home
