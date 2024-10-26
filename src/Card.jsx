import profilePic from './assets/profile.png'

function Card(){

    return(
        <div className="Card">
            <img className='Card-image' alt='Profilepic' src={profilePic}></img>
            <h2 className='Card-title'> Miki Matsubara </h2> 
            <p className='Card-text'> 松原 みき </p>
        </div>
        
    )
}

export default Card