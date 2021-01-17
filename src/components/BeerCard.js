import React from 'react';

export default function BeerCard({ beer }) {

    const getBeerImage = (url) => {
        const genericBottleImage = 'https://cdn.pixabay.com/photo/2014/12/22/00/04/bottle-576717_960_720.png';

        if (url) {
            return url;
        }

        return genericBottleImage;
    };

    return (
        <div className="beer-wrapper card">
            <div className="beer">
                <img className="beer-img" src={getBeerImage(beer.image_url)} alt={`${beer.name} beer`} />
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
    );

};