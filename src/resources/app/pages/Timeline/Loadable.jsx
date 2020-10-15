import lazyLoad from '../../../lib/lazyload';

const TimelinePage = lazyLoad(
    () => import('./index'),
    (module) => module.TimelinePage,
);

export default TimelinePage;
