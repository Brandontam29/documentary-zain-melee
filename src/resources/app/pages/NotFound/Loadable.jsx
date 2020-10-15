import lazyLoad from '../../../lib/lazyload';

const NotFoundPage = lazyLoad(
    () => import('./index'),
    (module) => module.NotFoundPage,
);

export default NotFoundPage;
