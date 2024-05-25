import { lazy } from 'ice';

import DrawerLayout from '@/Layout/Drawer';

const Main = lazy(() => import('@/pages/Main'));
const End = lazy(() => import('@/pages/End'));
const Auth = lazy(() => import('@/pages/Auth'));

const routerConfig: any[] = [
  {
    path: '/',
    component: DrawerLayout,
    children: [
      {
        menu: true,
        path: '/',
        label: '主页',
        exact: true,
        component: Main,
      },
      {
        menu: true,
        path: '/end',
        label: '兜底',
        component: End,
      },
      {
        path: '/auth',
        component: Auth,
      },
      {
        // 404
        component: Auth,
      },
    ],
  },
];
export default routerConfig;
