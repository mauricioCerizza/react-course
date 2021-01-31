import React from 'react';
// Wrapper, agrega lógica.
const withClass = (WrappedComponent, className) => {
    return props => <div className={className}>
        <WrappedComponent {...props}/>
    </div>
};

export default withClass;