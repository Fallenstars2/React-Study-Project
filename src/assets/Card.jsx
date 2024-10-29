import profilePic from '../assets/matsu.jpg'


function Card(){

    return(
        
        <div className='card'>
         
            <img className='card-image' src={profilePic} alt='profile-picture'></img>
            <h2 className='card-title'> Miki Matsubara </h2>
            <p> 松原 みき </p>
        
        </div>

    );

}

export default Card