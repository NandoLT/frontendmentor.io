import React from 'react'
import InfoNft from './InfoNft'
import UserCreator from './UserCreator'

export default function NftCard() {
    return (
        <div className="card-container">
            <InfoNft />
            <hr/>
            <UserCreator />
        </div>
    )
}
