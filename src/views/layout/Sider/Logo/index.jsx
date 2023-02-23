import logo from '@/assets/logo.svg'
import { connect } from 'react-redux'
import './index.scss'

const Logo = props => {
  const { sidebarCollapsed } = props
  return (
    <div className='sidebar-logo-container'>
      <img src={logo} className='sidebar-logo' alt='logo' />
      {sidebarCollapsed ? null : <h1 className='sidebar-title'>phil-react</h1>}
    </div>
  )
}

export default connect(state => state.app)(Logo)
