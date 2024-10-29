import React from 'react';
import AnriProfilePic from '../assets/anri.jpg'

function IdolCard({profilePic, name, japaneseName }) {
    return (
        <div className='Idolcards'>
            <img className='card-image' src={profilePic} alt='profile-picture' />
            <h2 className='card-title'>{name}</h2>
            <p>{japaneseName}</p>
        </div>
    );
}

export default IdolCard;
