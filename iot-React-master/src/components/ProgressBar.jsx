import React from 'react';

const ProgressBar = ({ value }) => {
    // Calcula a cor com base no valor de entrada
    const getGradientColor = (value) => {
        const red = Math.min(255, Math.floor((100 - value) * 2.55));
        const green = Math.min(255, Math.floor(value * 2.55));
        return `rgb(${red},${green},0)`;
    };

    const gradientColor = getGradientColor(value);

    const containerStyles = {
        height: '30px',
        width: '100%',
        backgroundColor: '#e0e0df',
        borderRadius: '50px',
        overflow: 'hidden',
        marginBottom: '20px',
    };

    const fillerStyles = {
        height: '100%',
        width: `${value}%`,
        backgroundColor: gradientColor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 0.2s ease-in-out',
    };

    const labelStyles = {
        padding: '5px',
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${value}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
