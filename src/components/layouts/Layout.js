import './Layout.css';
import Sidebar from './Sidebar.js';


function Layout(props) {
    // Properties ----------------------------
    // Hooks ---------------------------------
    // Context -------------------------------
    // Methods -------------------------------
    // View ---------------------------------

    return (
        <div className="page">
          <Sidebar/>
          <div className='pageComponents'>
                {props.children}
          </div>
            
        </div>
    )

}

export default Layout;