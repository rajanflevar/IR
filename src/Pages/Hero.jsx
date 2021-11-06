import React from 'react'
import './hero.css'
import banner from '../Assets/banner1.png'

export default function Hero() {
    return (
        <section id='hero'>
            <div className="title">
                <h1>Impact Era E-Commerce Business made easy.</h1>
            </div>
            <button className='hero-btn'>Join Us</button>
            <div className="banner">
                <img src={banner} alt="banner-1" width={900} height={500}/>
            </div>
        </section>
    )
}
