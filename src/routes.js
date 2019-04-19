import splash from './screens/splash';
import home from './screens/home';
import categories from './screens/categories';
import post from './screens/post';

const routes = [
  {
    path: '/splash/',
    component: splash
  },
  {
    path: '/home/',
    component: home
  },
  {
    path: '/categories/',
    component: categories
  },
  {
    path: '/post/',
    component: post,
  }
];

export default routes;