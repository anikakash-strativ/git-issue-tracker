import {  lazy } from 'react';

import { PRIVATE_ROUTES } from './paths';

const { DASHBOARD, TASK, TASK_VIEW, SETTING, CALANDER } = PRIVATE_ROUTES;

export const privateRoutes = [
  {
    path: `${DASHBOARD}`,
    Component: lazy(() => import('@/app/dashboard/home/index')),
    permissions: [],
  },
  {
    path: `${TASK}`,
    Component: lazy(() => import('@/app/dashboard/task/index')),
  },
  {
    path: `${TASK}/${TASK_VIEW}`,
    Component: lazy(() => import('@/app/dashboard/task/TaskView')),
  },
  {
    path: `${SETTING}`,
    Component: lazy(() => import('@/app/dashboard/setting/Setting')),
  },
  {
    path: `${CALANDER}`,
    Component: lazy(() => import('@/app/dashboard/calender/Calendar'))
  }
];
