import { lazy } from 'react';

import { PRIVATE_ROUTES } from './paths';

const { DASHBOARD, TASK } = PRIVATE_ROUTES;

export const privateRoutes = [
  {
    path: DASHBOARD,
    Component: lazy(() => import('@/app/dashboard/home')),
    permissions: [],
  },
  {
    path: TASK,
    Component: lazy(() => import('@/app/dashboard/task')),
  },
];
