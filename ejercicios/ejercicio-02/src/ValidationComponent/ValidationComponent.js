import React from 'react';

const ValidationComponent = (props) => {
    let output = 'Text long enough';

    if (props.textLength <= 5)
    {
        output = 'Text too short';
    }

    return (
        <div>
            <p>{output}</p>
        </div>
    );
}

export default ValidationComponent;