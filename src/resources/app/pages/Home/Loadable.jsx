import lazyLoad from '../../../lib/lazyload';
import Fallback from './Fallback';

const HomePage = lazyLoad(() => import('./index'), Fallback);

export default HomePage;
