import React from 'react'

export default function BeerCard({ beer }) {
    return (
        <div className="beer-wrapper card">
            <div className="beer">
                <img className="beer-img" src={beer.image_url} alt={`${beer.name} beer image`} />
                <h3>{beer.name}</h3>
                <span className="beer-info">
                    <span>ABV: {beer.abv}</span>
                    <span>IBU: {beer.ibu}</span>
                </span>
            </div>
            <div className="beer-content">
                <div className="beer-name">{beer.name}</div>
                <div className="beer-tagline">{beer.tagline}</div>
                <div className="beer-description">{beer.description}</div>
                <div className="beer-food-pairing">
                    Pair with: {beer.food_pairing.join(', ')}
                </div>
            </div>
        </div>
    )
}