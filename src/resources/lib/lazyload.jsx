/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';

const propTypes = {
    importFunc: PropTypes.func.isRequired,
    selectorFunc: PropTypes.func.isRequired,
    opts: PropTypes.shape({
        fallback: PropTypes.node,
    }),
    fallback: PropTypes.node,
};

const defaultProps = {};

const lazyLoad = (importFunc, selectorFunc, opts) => {
    let lazyFactory = importFunc;

    if (selectorFunc) {
        lazyFactory = () => importFunc().then((module) => ({ default: selectorFunc(module) }));
    }

    const LazyComponent = lazy(lazyFactory);

    return (props) => (
        <Suspense fallback={opts.fallback}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

lazyLoad.propTypes = propTypes;
lazyLoad.defaultProps = defaultProps;

export default lazyLoad;

/**
 * use case
 */

// import { lazyLoad } from 'utils/loadable';

// export const NotFoundPage = lazyLoad(
//   () => import('./index'),
//   module => module.NotFoundPage,
// );
