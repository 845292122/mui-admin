import Home from '~/pages/home'
import { RouteType } from '.'
import AppLayout from '~/layout'

const BizRoutes: RouteType[] = [
  // * 通用路由
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        meta: {
          title: '首页',
          key: '/',
          requireAuth: true
        }
      }
      // {
      //   path: '/profile',
      //   element: lazyLoad(React.lazy(() => import('~/pages/common/profile'))),
      //   meta: {
      //     title: '个人中心',
      //     key: '/profile',
      //     requireAuth: true,
      //   }
      // }
    ]
  }
  // * 系统业务路由
  // {
  //   element: <AppLayout />,
  //   meta: {
  //     key: '/system',
  //     title: '系统管理',
  //     requireAuth: true,
  //     perm: 'system',
  //     icon: <SettingTwo theme="outline" size="18" strokeLinecap="square" />
  //   },
  //   children: [
  //     {
  //       path: '/system/tenant',
  //       element: lazyLoad(React.lazy(() => import('~/pages/system/tenant'))),
  //       meta: {
  //         title: '租户管理',
  //         key: '/system/tenant',
  //         requireAuth: true,
  //         perm: 'system:tenant'
  //       }
  //     },
  //     {
  //       path: '/system/user',
  //       element: lazyLoad(React.lazy(() => import('~/pages/system/user'))),
  //       meta: {
  //         title: '用户管理',
  //         key: '/system/user',
  //         requireAuth: true,
  //         perm: 'system:user'
  //       }
  //     },
  //     {
  //       path: '/system/log',
  //       element: lazyLoad(React.lazy(() => import('~/pages/system/log'))),
  //       meta: {
  //         title: '操作日志',
  //         key: '/system/log',
  //         requireAuth: true,
  //         perm: 'system:log'
  //       }
  //     }
  //   ]
  // },
  // * 错误页面路由
  // {
  //   element: <AppLayout />,
  //   children: [
  //     {
  //       path: '/403',
  //       element: lazyLoad(React.lazy(() => import('~/pages/error/Unauthorized'))),
  //       meta: {
  //         title: '未授权',
  //         key: '403',
  //         requireAuth: true
  //       }
  //     },
  //     {
  //       path: '/404',
  //       element: lazyLoad(React.lazy(() => import('~/pages/error/NotFound'))),
  //       meta: {
  //         title: '页面飞走了~',
  //         key: '404'
  //       }
  //     }
  //   ]
  // }
]

export default BizRoutes
