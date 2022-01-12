import React from 'react'
import image from '../images/image-equilibrium.jpg'
export default function InfoNft() {
    return (
        <div className="nft-info-container">
            <div className="nft-image-container">
                <img className="nft-image" src={ image } alt="equilibrium" />
            </div>
            <h3> Equilibrium #3429</h3>
            <p> Esto es la ingormación de la moneda, ya tu sabes siempre interesante</p>
            <div className="nft-cotization">
                <p> VALOR </p>
                <p> DIAS AGO </p>
            </div>
        </div>
    )
}
