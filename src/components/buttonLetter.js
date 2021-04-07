import React from 'react';
import PropTypes from "prop-types";


const ButtonLetter = ({letter, onClick}) => {
    return (
        <button className="btn-letter" onClick={() => onClick(letter)}>
            {letter}
        </button>
    );
}

ButtonLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ButtonLetter;