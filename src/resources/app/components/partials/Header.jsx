import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';

import * as AppPropTypes from '../../../lib/PropTypes';
import { setMenuOpen as setMenuOpenAction } from '../../../actions/siteActions';

import Burger from '../icons/Burger';
import styles from '../../../styles/partials/header.scss';

const propTypes = {
    menuOpen:  PropTypes.bool,
    setMenuOpen: PropTypes.func,
    sticky: PropTypes.bool,
    className: AppPropTypes.className,
};

const defaultProps = {
    menuOpen: false,
    setMenuOpen: () => {},
    sticky: true,
    className: null,
};

const Header = ({ menuOpen, setMenuOpen, sticky, className }) => {
    console.log(sticky);
    const routes = [
        { name: 'Home', link: '/' },
        { name: 'Timeline', link: 'pricing' },
        { name: 'Contact', link: 'contact' },
        { name: 'Resources', link: 'resources' },
    ];

    return (
        <div
            className={classNames([
                styles.container,
                {
                    [className]: className !== null,
                    [styles.sticky]: sticky,
                },
            ])}
        >
            <div className={styles.logo} sticky={sticky}>
                <Link to="/">Home 1</Link>
            </div>

            <nav>
                <ul className={styles.navigation}>
                    {routes.map((route) => (
                        <li key={route.name + route.link}>
                            <Link to={route.link}>{route.name}</Link>
                        </li>
                    ))}

                </ul>
            </nav>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className={styles.burger}>
                <Burger />
            </button>
        </div>
    );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

const WithReduxContainer = connect(({ site }) => ({
    menuOpen: site.menuOpen,
}), (dispatch) => ({
    setMenuOpen: (value) => dispatch(setMenuOpenAction(value)),
}))(Header);

export default WithReduxContainer;
