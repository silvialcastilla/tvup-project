import logo from '../../../Assets/logo-tivify.png.webp'
import './NavBar.scss';


export const NavBar = () => {
  return (
    <div className='nav-bar'>
        <img alt='logo' className='nav-bar-img'  src={logo}/> 
    </div>
  )
}
