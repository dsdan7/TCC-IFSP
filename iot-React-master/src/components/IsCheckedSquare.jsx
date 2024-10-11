import React from 'react';

const BooleanSquare = ({ value }) => {
    const squareStyles = {
        width: '30px',
        height: '30px',
        backgroundColor: value ? 'green' : 'red',
        display: 'inline-block',
        margin: '10px'
    };

    return <div style={squareStyles}></div>;
};

export default BooleanSquare;
