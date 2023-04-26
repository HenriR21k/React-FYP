import './Layout.css';
import Sidebar from './Sidebar.js';
import { useLocation } from 'react-router-dom';


function Layout(props) {
    // Properties ----------------------------
    const location = useLocation();
    // Hooks ---------------------------------
    // Context -------------------------------
    // Methods -------------------------------
    // View ---------------------------------

    return (
        // <div className="page">
        //   <Sidebar/>
        //   <div className='pageComponents'>
        //         {props.children}
        //   </div>
        // </div>
        <div className="page">
        {location.pathname === '/' ? (
          <div className='pageComponents'>
            {props.children}
          </div>
        ) : (
          <>
            <Sidebar/>
            <div className='pageComponents'>
              {props.children}
            </div>
          </>
        )}
      </div>
    )

}

export default Layout;