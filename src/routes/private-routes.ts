import { lazy } from 'react';

import { PRIVATE_ROUTES } from './paths';

const { DASHBOARD, TASK, TASK_VIEW, PARAM_ID } = PRIVATE_ROUTES;

export const privateRoutes = [
  {
    path: `${DASHBOARD}`,
    Component: lazy(() => import('@/app/dashboard/home')),
    permissions: [],
  },
  {
    path: `${TASK}`,
    Component: lazy(() => import('@/app/dashboard/task')),
  },
  {
    path: `${TASK}/${TASK_VIEW}`,
    Component: lazy(() => import('@/app/dashboard/task/ViewTask')),
  },
];
