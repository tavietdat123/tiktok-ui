import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { Headeronly } from '../layout';
import Search from '../pages/Search';
import config from '../config';
import Live from '../pages/Live';

const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: Headeronly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
];
const privateRoute = [];
export { publicRoute, privateRoute };
