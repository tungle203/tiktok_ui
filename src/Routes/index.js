import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live/Live';
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
