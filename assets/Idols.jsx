
import PropTypes from 'prop-types'


function Idols(props) {

    return(
        <div className="Idols"> 
            
            <p>Name: {props.name} </p>
            <p>Top Hit: {props.Tophit} </p>
            <p>Debut: {props.debut} </p>
            <p>Active: {props.isActive ? "Yes" : "No"}</p>


        </div>
    );

}

Idols.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isActive: PropTypes.bool,
}


Idols.defaultProps = {
    name: "Idol",
    Tophit: 'Unknown',
    debut: 'Unknown',
    isActive: 'X',
}
export default Idols