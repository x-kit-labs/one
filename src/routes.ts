import { lazy } from 'ice';

// import DrawerLayout from '@/Layout/Drawer';
import Layout from '@/Layout';

const Main = lazy(() => import('@/pages/Main'));
const Station = lazy(() => import('@/pages/Station'));
const Note = lazy(() => import('@/pages/Note'));
const Code = lazy(() => import('@/pages/Code'));
const Work = lazy(() => import('@/pages/Work'));

const End = lazy(() => import('@/pages/End'));
const Auth = lazy(() => import('@/pages/Auth'));

const routerConfig: Array<{
  path: string;
  component: any;
  children: Array<{
    menu?: boolean;
    path?: string;
    labelI18n?: string;
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
        labelI18n: 'o-shell-home',
        icon: 'io-home',
        exact: true,
        component: Main,
      },
      {
        menu: true,
        path: '/station',
        labelI18n: 'o-shell-station',
        icon: 'io-electronics',
        component: Station,
      },
      {
        menu: true,
        path: '/note',
        labelI18n: 'o-shell-note',
        icon: 'io-survey',
        component: Note,
      },
      {
        menu: true,
        path: '/code',
        labelI18n: 'o-shell-code',
        icon: 'io-code',
        component: Code,
      },
      {
        menu: true,
        path: '/work',
        labelI18n: 'o-shell-work',
        icon: 'io-work',
        component: Work,
      },
      {
        menu: false,
        path: '/end',
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
