import lazyLoad from '../../../lib/lazyload';

const HomePage = lazyLoad(
    () => import('./index'),
    (module) => module.HomePage,
);

export default HomePage;
