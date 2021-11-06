import React from 'react'
import img from '../Assets/about.png'
import './about.css'

export default function About() {
    return (
        <div id="about">
            <div className="about">
                <h2>ABOUT US</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolorum eos explicabo itaque voluptates nulla hic accusamus laboriosam obcaecati, labore, officiis architecto expedita ducimus voluptas. Officiis adipisci id tempore dolor.</h4>
            </div>
            <img src={img} alt="img" height={300} width={600}/>
        </div>
    )
}
