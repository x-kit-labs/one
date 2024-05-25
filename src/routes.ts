import { lazy } from 'ice';

// import DrawerLayout from '@/Layout/Drawer';
import Layout from '@/Layout';

const Main = lazy(() => import('@/pages/Main'));
const Station = lazy(() => import('@/pages/Station'));
const End = lazy(() => import('@/pages/End'));
const Auth = lazy(() => import('@/pages/Auth'));

const routerConfig: Array<{
  path: string;
  component: any;
  children: Array<{
    menu?: boolean;
    path?: string;
    label?: string;
    icon?: string;
    exact?: boolean;
    component?: any;
  }>;
}> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        menu: true,
        path: '/',
        label: '主页',
        icon: 'io-home',
        exact: true,
        component: Main,
      },
      {
        menu: true,
        path: '/station',
        label: '中转站',
        icon: 'io-electronics',
        component: Station,
      },
      {
        menu: false,
        path: '/end',
        label: '兜底',
        icon: 'io-end',
        component: End,
      },
      {
        path: '/auth',
        icon: 'io-auth',
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
