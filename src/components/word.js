import React from 'react';
import PropTypes from "prop-types";

const HIDDEN_SYMBOL = "_";

const Word = ({word, isFound}) => {
    return (
        <span className={`word ${isFound}`}>
            {isFound === 'notFound' ? HIDDEN_SYMBOL : word}
        </span>
    );
}

Word.propTypes = {
    word: PropTypes.string.isRequired,
    isFound: PropTypes.oneOf([
        'notFound',
        'Matched'
    ])
}

export default Word;