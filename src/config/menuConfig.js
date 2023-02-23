/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
import {
  ClusterOutlined,
  HomeOutlined,
  FileOutlined,
  KeyOutlined,
  LockOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  TableOutlined,
  FileExcelFilled,
  CopyOutlined,
  FileZipOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  BugOutlined
} from '@ant-design/icons'

const menuList = [
  {
    label: '首页',
    key: '/dashboard',
    icon: <HomeOutlined />,
    roles: ['admin', 'editor', 'guest']
  },
  {
    label: '作者的github',
    key: '/doc',
    icon: <FileOutlined />,
    roles: ['admin', 'editor', 'guest']
  },
  {
    label: '引导页',
    key: '/guide',
    icon: <KeyOutlined />,
    roles: ['admin', 'editor']
  },
  {
    label: '权限测试',
    key: '/permission',
    icon: <LockOutlined />,
    children: [
      {
        label: '权限说明',
        key: '/permission/explanation',
        roles: ['admin']
      },
      {
        label: 'admin页面',
        key: '/permission/adminPage',
        roles: ['admin']
      },
      {
        label: 'guest页面',
        key: '/permission/guestPage',
        roles: ['guest']
      },
      {
        label: 'editor页面',
        key: '/permission/editorPage',
        roles: ['editor']
      }
    ]
  },
  {
    label: '组件',
    key: '/components',
    icon: <AppstoreOutlined />,
    roles: ['admin', 'editor'],
    children: [
      {
        label: '富文本',
        key: '/components/richTextEditor',
        roles: ['admin', 'editor']
      },
      {
        label: 'Markdown',
        key: '/components/Markdown',
        roles: ['admin', 'editor']
      },
      {
        label: '拖拽列表',
        key: '/components/draggable',
        roles: ['admin', 'editor']
      }
    ]
  },
  {
    label: '图表',
    key: '/charts',
    icon: <AreaChartOutlined />,
    roles: ['admin', 'editor'],
    children: [
      {
        label: '键盘图表',
        key: '/charts/keyboard',
        roles: ['admin', 'editor']
      },
      {
        label: '折线图',
        key: '/charts/line',
        roles: ['admin', 'editor']
      },
      {
        label: '混合图表',
        key: '/charts/mix-chart',
        roles: ['admin', 'editor']
      }
    ]
  },
  {
    label: '路由嵌套',
    key: '/nested',
    icon: <ClusterOutlined />,
    roles: ['admin', 'editor'],
    children: [
      {
        label: '菜单1',
        key: '/nested/menu1',
        children: [
          {
            label: '菜单1-1',
            key: '/nested/menu1/menu1-1',
            roles: ['admin', 'editor']
          },
          {
            label: '菜单1-2',
            key: '/nested/menu1/menu1-2',
            children: [
              {
                label: '菜单1-2-1',
                key: '/nested/menu1/menu1-2/menu1-2-1',
                roles: ['admin', 'editor']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: '表格',
    key: '/table',
    icon: <TableOutlined />,
    roles: ['admin', 'editor']
  },
  {
    label: 'Excel',
    key: '/excel',
    icon: <FileExcelFilled />,
    roles: ['admin', 'editor'],
    children: [
      {
        label: '导出Excel',
        key: '/excel/export',
        roles: ['admin', 'editor']
      },
      {
        label: '上传Excel',
        key: '/excel/upload',
        roles: ['admin', 'editor']
      }
    ]
  },
  {
    label: 'Zip',
    key: '/zip',
    icon: <FileZipOutlined />,
    roles: ['admin', 'editor']
  },
  {
    label: '剪贴板',
    key: '/clipboard',
    icon: <CopyOutlined />,
    roles: ['admin', 'editor']
  },
  {
    label: '用户管理',
    key: '/user',
    icon: <UsergroupAddOutlined />,
    roles: ['admin']
  },
  {
    label: '关于作者',
    key: '/about',
    icon: <UserOutlined />,
    roles: ['admin', 'editor', 'guest']
  },
  {
    label: 'Bug收集',
    key: '/bug',
    icon: <BugOutlined />,
    roles: ['admin']
  }
]
export default menuList
