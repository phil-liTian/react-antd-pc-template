import Loadable from 'react-loadable'
import Loading from '@c/Loading'
import Dashboard from '@v/dashboard'
import Doc from '@v/doc'
import About from '@v/about'
import Bug from '@v/bug'
import Zip from '@v/zip'
import ClipBoard from '@v/clipboard'
import ExportExcel from '@v/excel/exportExcel'
import UploadExcel from '@v/excel/uploadExcel'
import RichTextEditor from '@v/components-demo/richTextEditor'
import Markdown from '@v/components-demo/markDown'
import Draggable from '@v/components-demo/draggable'
import Guide from '@v/guide'
import Explanation from '@v/permission/explanation'
import AdminPage from '@v/permission/adminPage'
import EditorPage from '@v/permission/editorPage'
import GuestPage from '@v/permission/guestPage'
import Table from '@v/table'
import Menu1_1 from '@v/nested/menu1/menu1-1'
import Menu1_2_1 from '@v/nested/menu1/menu1-2/menu1-2-1'

const routeMap = [
  {
    path: '/dashboard',
    component: <Dashboard />,
    roles: ['admin', 'editor', 'guest']
  },
  {
    path: '/about',
    component: <About />,
    roles: ['admin', 'editor', 'guest']
  },
  { path: '/doc', component: <Doc />, roles: ['admin', 'editor', 'guest'] },
  { path: '/guide', component: <Guide />, roles: ['admin', 'editor'] },
  {
    path: '/permission/explanation',
    component: <Explanation />,
    roles: ['admin']
  },
  { path: '/permission/adminPage', component: <AdminPage />, roles: ['admin'] },
  { path: '/permission/guestPage', component: <GuestPage />, roles: ['guest'] },
  {
    path: '/permission/editorPage',
    component: <EditorPage />,
    roles: ['editor']
  },
  {
    path: '/components/richTextEditor',
    component: <RichTextEditor />,
    roles: ['admin', 'editor']
  },
  {
    path: '/components/Markdown',
    component: <Markdown />,
    roles: ['admin', 'editor']
  },
  {
    path: '/components/draggable',
    component: <Draggable />,
    roles: ['admin', 'editor']
  },
  // {
  //   path: '/charts/keyboard',
  //   component: KeyboardChart,
  //   roles: ['admin', 'editor']
  // },
  // { path: '/charts/line', component: LineChart, roles: ['admin', 'editor'] },
  // {
  //   path: '/charts/mix-chart',
  //   component: MixChart,
  //   roles: ['admin', 'editor']
  // },
  {
    path: '/nested/menu1/menu1-1',
    component: <Menu1_1 />,
    roles: ['admin', 'editor']
  },
  {
    path: '/nested/menu1/menu1-2/menu1-2-1',
    component: <Menu1_2_1 />,
    roles: ['admin', 'editor']
  },
  { path: '/table', component: <Table />, roles: ['admin', 'editor'] },
  {
    path: '/excel/export',
    component: <ExportExcel />,
    roles: ['admin', 'editor']
  },
  {
    path: '/excel/upload',
    component: <UploadExcel />,
    roles: ['admin', 'editor']
  },
  { path: '/zip', component: <Zip />, roles: ['admin', 'editor'] },
  { path: '/clipboard', component: <ClipBoard />, roles: ['admin', 'editor'] },
  // { path: '/user', component: User, roles: ['admin'] },
  // { path: '/about', component: About, roles: ['admin', 'editor', 'guest'] },
  { path: '/bug', component: <Bug />, roles: ['admin'] }
  // { path: '/error/404', component: Error404 }
]

export default routeMap
