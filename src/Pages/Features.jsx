import React from 'react'
import './features.css'
import Card from '../Components/Card'

export default function Features() {
    return (
        <div className='f-container'>
            <div className="f-title">
                <h2>What We Do</h2>
            </div>
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
