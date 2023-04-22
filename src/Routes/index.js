import routesConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.following, component: Following },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
