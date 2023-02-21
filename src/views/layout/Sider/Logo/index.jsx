import logo from '@/assets/logo.svg'
import './index.scss'

const Logo = () => {
  return (
    <div className='sidebar-logo-container'>
      <img src={logo} className='sidebar-logo' alt='logo' />
      <h1 className='sidebar-title'>phil-react</h1>
    </div>
  )
}

export default Logo
