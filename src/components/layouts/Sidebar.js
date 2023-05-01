import { NavLink, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SidebarDataLecturer } from './SidebarDataLecturer';
import './Sidebar.css';
import logo from './Images/virtuteam.jpeg'
import { useAuth } from '../auth/useAuth';
import useLoad from '../api/useLoad';



function Sidebar() {

  const { loggedinUser } = useAuth();

  //Query users usertype and display Modules

  const endpoint = `users/${loggedinUser}/usertype`
  const [usertype, , loadingMessage2] = useLoad(endpoint)

  let variant = ""
  {!usertype
    ? variant = "Empty"
    : variant = usertype[0].UserTypeName
  }

  const getLinkStyle = ({ isActive }) => ( isActive ? 'navSelected' : null);
  const { logout } = useAuth();

  const handleNavItemClick = (item) => {
    if (item.cName === "nav-textLog") {
      logout();
    }
  };

  switch (variant) {
    case 'Student':
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
  case 'Lecturer':
    return (
      <nav className='nav-menu'>
      <NavLink to='/'><img className='navLogo' src={logo}/></NavLink>
      
      <ul className='nav-menu-items'>

        {SidebarDataLecturer.map((item, index) => {
          return (
            <li key={index} className={item.cName} onClick={() => handleNavItemClick(item)}>
              <NavLink to={item.path} className={getLinkStyle}>{item.icon}<span>{item.title}</span></NavLink>
            </li>
          );
        })}

      </ul>
    </nav>
    )
}
}

export default Sidebar;