import React from 'react'
import './card.css'

export default function Card(img, Title) {
    return (
        <div>
            <div className="card">
                <div className="img-holder">
                    <img src={img} alt="img" />
                </div>
                <div className="card-title">
                    <h3>Feature</h3>
                </div>                   
            </div>
        </div>
    )
}
