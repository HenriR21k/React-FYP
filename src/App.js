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


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/Modules/Projects' element={<ModulesProjects />} />
          <Route path='/Modules/Projects/Groups' element={<ModulesProjectsGroups />} />
          <Route path='/signin'  element={<SignIn />} />
          <Route path='/GroupPage/AddTaskPage' element={<AddTasksPage />} /> 
          <Route path='/GroupPage/ProjectPage' element={<ProjectPage />} /> 
          <Route path='GroupPage/ProjectPage/TaskPage' element={<TaskPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;