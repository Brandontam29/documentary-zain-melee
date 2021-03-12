/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

import * as AppPropTypes from '../../../../lib/PropTypes';

import styles from '../../../../styles/pages/home-sections-landing.scss';

const propTypes = {
    className: AppPropTypes.className,
};

const defaultProps = {
    className: null,
};

const Video = ({ className }) => {
    return (
        <div
            className={classNames([
                styles.container,
                {
                    [className]: className !== null,
                },
            ])}
        >
            {/* <video src={meleeMovement} alt="" className={styles.video} /> */}
            <video
                src="../../../components/icons/background/melee-movement.mp4"
                alt=""
                type="video/mp4"
                className={styles.video}
            />
        </div>
    );
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
