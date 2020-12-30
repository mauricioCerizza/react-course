import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Soy {props.userName}</p>  
            <p></p>          
        </div>
    );
}

export default userOutput;