import React from 'react';
// import PropTypes from "prop-types";
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import * as AppPropTypes from "../lib/PropTypes";

import Home from './pages/Home/Loadable';
import Timeline from './pages/Timeline/Loadable';
import NotFound from './pages/NotFound/Loadable';
import Layout from './components/main/Layout';

import '../styles/main.global.scss';

const propTypes = {};

const defaultProps = {};

const App = () => {
    const pageWrapper = (component) => {
        const Component = component;
        return (
            <Layout>

                <Component />
            </Layout>

        );
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/timeline" render={() => pageWrapper(Timeline)} />
                <Route exact path="/" render={() => pageWrapper(Home)} />
                <Route path="*" render={() => pageWrapper(NotFound)} />
            </Switch>
        </BrowserRouter>

    );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
