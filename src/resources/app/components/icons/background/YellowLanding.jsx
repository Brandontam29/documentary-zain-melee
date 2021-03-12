import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames'

import * as AppPropTypes from '../../../../lib/PropTypes';

// import styles from '../../styles/main/YellowLanding.scss';

const propTypes = {
    color: PropTypes.string,
    className: AppPropTypes.className,
};

const defaultProps = {
    color: '#ffe000',
    className: null,
};

const YellowLanding = ({ color, className }) => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={className}
    >
        <polygon points="0 1000 0 1150 1440 50 1440 0 0 1000" fill={color} />
    </svg>
);

YellowLanding.propTypes = propTypes;
YellowLanding.defaultProps = defaultProps;

export default YellowLanding;
