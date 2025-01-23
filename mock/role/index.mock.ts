import { MockMethod } from 'vite-plugin-mock'
import { SUCCESS_CODE } from '@/constants'

const timeout = 1000

const adminList = [
  {
    path: '/',
    component: '#',
    redirect: '/index',
    name: '/',
    meta: {
      title: 'router.level',
      icon: 'carbon:skill-level-advanced'
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: 'views/Index/index',
        meta: {
          title: 'router.index'
        }
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: 'views/Level/Menu2',
        meta: {
          title: 'router.menu'
        }
      },
      {
        path: 'cargo',
        name: 'Cargo',
        component: 'views/pages/cargo',
        meta: {
          title: 'router.menu'
        }
      },
      {
        path: 'tank',
        name: 'Tank',
        component: 'views/pages/tank',
        meta: {
          title: 'router.menu'
        }
      },
      {
        path: 'knowledge',
        name: 'Knowledge',
        component: 'views/pages/knowledge',
        meta: {
          title: 'router.menu'
        }
      },
      {
        path: 'learning',
        name: 'Learning',
        component: 'views/pages/learning',
        meta: {
          title: 'router.menu'
        }
      }
    ]
  }
]

const testList: string[] = ['/index', '/cargo', '/tank', '/knowledge', '/learning']

export default [
  // 列表接口
  {
    url: '/mock/role/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { roleName } = query
      return {
        code: SUCCESS_CODE,
        data: roleName === 'admin' ? adminList : testList
      }
    }
  }
] as MockMethod[]
