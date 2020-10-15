import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames'

import * as AppPropTypes from '../../../lib/PropTypes';

// import styles from '../../styles/main/BurgerIcon.scss';

const propTypes = {
    color: PropTypes.string,
    className: AppPropTypes.className,
};

const defaultProps = {
    color: 'currentColor',
    className: null,
};

const BurgerIcon = ({ color, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

BurgerIcon.propTypes = propTypes;
BurgerIcon.defaultProps = defaultProps;

export default BurgerIcon;
