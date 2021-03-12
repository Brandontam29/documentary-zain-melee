import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';

import * as AppPropTypes from '../../../lib/PropTypes';

import Header from '../partials/Header';
import styles from '../../../styles/main/layout.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: AppPropTypes.className,
};

const defaultProps = {
    className: null,
};

const Layout = ({ children, className }) => {
    const [sticky, setSticky] = useState(false);

    const scrollFunction = (threshold) => {
        if (document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold) {
            return setSticky(true);
        }
        return setSticky(false);
    };

    window.onscroll = () => scrollFunction(80);

    return (
        <div
            className={classNames([
                styles.container,
                {
                    [className]: className !== null,
                },
            ])}
        >
            <Header sticky={sticky} className={styles.header} />
            {children}
        </div>
    );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
