import { lazy } from 'react'

export default {
  Home: {
    path: '/Home',
    exact: true,
    component: lazy(() => import('../page/Home'))
  },
  Review: {
    path: '/about',
    component: lazy(() => import('../page/Review'))
  },
  Community: {
    path: '/contact',
    component: lazy(() => import('../page/Community'))
  },
  
}
