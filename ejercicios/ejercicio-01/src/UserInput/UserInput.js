import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    }
    return <input style={inputStyle} type="text" onChange={props.onChange} value={props.currentName}></input>
}

export default userInput;