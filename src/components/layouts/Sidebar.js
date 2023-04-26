import { NavLink, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import logo from './Images/virtuteam.jpeg'
import { useAuth } from '../auth/useAuth';



function Sidebar() {

  const getLinkStyle = ({ isActive }) => ( isActive ? 'navSelected' : null);
  const { logout } = useAuth();

  const handleNavItemClick = (item) => {
    if (item.cName === "nav-textLog") {
      logout();
    }
  };
  
  return (
    
        <nav className='nav-menu'>
          <NavLink to='/'><img className='navLogo' src={logo}/></NavLink>
          
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={() => handleNavItemClick(item)}>
                  <NavLink to={item.path} className={getLinkStyle}>{item.icon}<span>{item.title}</span></NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      
  
  );
}

export default Sidebar;