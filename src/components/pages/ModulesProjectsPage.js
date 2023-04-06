import { API } from "../api/apiRequest";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useLoad from "../api/useLoad";
import { useState, useEffect } from "react";
import ReAccordion from "../entities/ReAccordion";
import Button from "../UI/Button";
import ProjectForm from "../entities/ProjectForm";


function ModulesProjects() {
  // Properties ----------------------------
  const navigate = useNavigate();

  const { state } = useLocation(); // 
  const accessedModuleID = state.id;

  const endpoint = `modules/${accessedModuleID}/projects`
  // Hooks ---------------------------------
  const [projects, , loadingMessage, loadProjects] = useLoad(endpoint)

  const [singleProject, setSingleProject] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

   //For post, it should have a null taskID
   let dummyObject = {
    projectID: null,
  }

  useEffect(() => {setSingleProject(dummyObject)}, []);

  useEffect(() => {loadProjects(endpoint)}, []);

  // Methods -------------------------------

  const handleProjectPost = async (newProject) => {
    const outcome = await API.post('projects', newProject);
    loadProjects(endpoint)
  }

  const handleProjectPut = async (newProject) => {
    const outcome = await API.put('projects/'+newProject.projectID, newProject)
    loadProjects(endpoint)
    
  }

  const cancelProjectForm = () => {
    setShowProjectForm(false);
    setSingleProject(dummyObject);
    
  }

  const handleSubmit = () => {
    setShowProjectForm(true);
  }

  const setEdit = (Project) => {
   
    setSingleProject(Project);
    setShowProjectForm(true);
  }

  const navigateToProject = (item) => {
    const item1 = item
    console.log(item1.projectID);
    navigate("../Modules/Projects/Groups", {
      state: {id: item1.projectID, ModuleID: accessedModuleID}
    })
  }

  // View ---------------------------------

  const header = {
    projectName: 'projectName',
    projectDescription: 'ProjectDescription',
    projectStartDate: 'ProjectStartDate',
    projectEndDate: 'ProjectEndDate'
    }
  

  return (
      <>
      {
      !projects
          ? <p>No projects</p>
          : projects.length === 0
            ? <p>You are not in any projects.</p>
            : <ReAccordion
              data={projects}
              headers = {header}
              headerField = 'projectName'
              fieldOrder = {["projectName", "projectDescription", "projectStartDate", "projectEndDate"]}
              handlers={{setEdit, navigateToProject}}
            /> 
            
      }
          <Button
          className="addModule"
          img="https://img.icons8.com/material-outlined/48/plus-math--v1.png"
          title = "Add Project"
          onClick = {handleSubmit}
          //call method to open modal
        />
  
        {
              showProjectForm &&
              <ProjectForm
                onPost = {handleProjectPost}
                onPut = {handleProjectPut}
                onCancel = {cancelProjectForm}
                project = {singleProject}
                ModuleID = {accessedModuleID}
              />
        }

      </>
  )

}

export default ModulesProjects;