import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import * as AppPropTypes from '../../../../lib/PropTypes';

// import YellowLanding1 from '../../../components/icons/background/YellowLanding1.svg';

import zain from '../../../components/icons/background/zain.png';
import YellowLanding from '../../../components/icons/background/YellowLanding';
import styles from '../../../../styles/pages/home-sections-landing.scss';

const propTypes = {
    className: AppPropTypes.className,
};

const defaultProps = {
    className: null,
};

const Landing = ({ className }) => {
    return (
        <div
            className={classNames([
                styles.container,
                {
                    [className]: className !== null,
                },
            ])}
        >
            {/* <div className={styles.backgroundYellow1} style={{ backgroundImage: `url(${YellowLanding1})` }} /> */}

            <YellowLanding className={styles.backgroundYellow1} />
            <img src={zain} alt="" className={styles.zain} />
        </div>
    );
};

Landing.propTypes = propTypes;
Landing.defaultProps = defaultProps;

export default Landing;
