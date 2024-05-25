import { IRouterConfig, lazy } from 'ice';

const Auth = lazy(() => import('@/pages/Auth'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        exact: true,
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
