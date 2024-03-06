import React from 'react';
import css from './Statistics.module.css';

import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.div}>
            <span className={css.span}>Good: {good}</span>
            <span className={css.span}>Neutral: {neutral}</span>
            <span className={css.span}>Bad: {bad}</span>
            <span className={css.span}>Total: {total}</span>
            <span className={css.span}>
                Positive feedback: {positivePercentage}%
            </span>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
