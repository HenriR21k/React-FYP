import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout.js';
import Home from './components/pages/Home.js';
import SignIn from './components/pages/SignIn.js';
import PageNotFound from './components/pages/404.js';
import AddTasksPage from './components/pages/AddTasksPage.js';
import ProjectPage from './components/pages/ProjectPage.js';
import TaskPage from './components/pages/TaskPage.js';
import ModulesProjects from './components/pages/ModulesProjectsPage.js';
import './App.css';
import ModulesProjectsGroups from './components/pages/ModulesProjectsGroups.js';
import LoginPage from './components/pages/LoginPage.js';
import AssignUserToModulePage from './components/pages/AssignUserToModulePage.js';
import MyWorkPage from './components/pages/MyWorkPage.js';
import { AuthProvider } from './components/auth/useAuth.js';
import ProtectedRoute from './components/auth/ProtectedRoute.js';


function App() {

  

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' element={<LoginPage />} />
            <Route path='/Home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path='/MyWork' element={<ProtectedRoute><MyWorkPage/></ProtectedRoute>} />
            <Route path='/Modules/Projects' element={<ProtectedRoute><ModulesProjects/></ProtectedRoute>} />
            <Route path='/Modules/Assign' element={<ProtectedRoute><AssignUserToModulePage/></ProtectedRoute>} />
            <Route path='/Modules/Projects/Groups' element={<ProtectedRoute><ModulesProjectsGroups/></ProtectedRoute>} />
            <Route path='/signin'  element={<SignIn />} />
            <Route path='/GroupPage/AddTaskPage' element={<ProtectedRoute><AddTasksPage/></ProtectedRoute>} /> 
            <Route path='/GroupPage/ProjectPage' element={<ProtectedRoute><ProjectPage/></ProtectedRoute>} /> 
            <Route path='GroupPage/ProjectPage/TaskPage' element={<ProtectedRoute><TaskPage/></ProtectedRoute>} />
            
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
 


  );
}

export default App;