import { useState, useEffect } from "react";
import { API } from "../api/apiRequest.js";
import useLoad from "../api/useLoad.js";
import GroupList from "../UI/GroupList";
import './Home.css';
import './LecturerHome.css';
import TeamTable from "../entities/TeamTable";
import Table from "../entities/Table.js";
import Accordian from "../entities/Accordian.js";
import ReAccordion from "../entities/ReAccordion.js";
import Button from "../UI/Button.js";
import ModuleForm from "../entities/ModuleForm.js";
import { useNavigate } from 'react-router-dom';


function LecturerHome() {
  // Properties ----------------------------
  // Create navigation to project page, take Moduleid with it.
  const navigate = useNavigate();

  const endpoint3 = `modules`
  // Hooks ---------------------------------
  const [modules, , loadingMessage3, loadModules] = useLoad(endpoint3)
  const [singleModule, setSingleModule] = useState(null);
  const [showModuleForm, setShowModuleForm] = useState(false);

   //For post, it should have a null taskID
   let dummyObject = {
    ModuleID: null,
  }

  useEffect(() => {setSingleModule(dummyObject)}, []);

  useEffect(() => {loadModules(endpoint3)}, []);

  // Methods -------------------------------

  const handleModulePost = async (newModule) => {
    const outcome = await API.post('module', newModule);
    loadModules(endpoint3)
  }

  const handleModulePut = async (newModule) => {
    const outcome = await API.put('modules/'+newModule.ModuleID, newModule)
    loadModules(endpoint3)
    
  }

  const cancelModuleForm = () => {
    setShowModuleForm(false);
    setSingleModule(dummyObject);
    
  }

  const handleSubmit = () => {
    setShowModuleForm(true);
  }

  const setEdit = (module) => {
    //This sets the singleTask so we can pass it into taskform
    setSingleModule(module);
    setShowModuleForm(true);
  }

  const navigateToProject = (item) => {
    const item1 = item
    console.log(item1.ModuleID);
    navigate("../Modules/Projects", {
      state: {id: item1.ModuleID}
    })

  }
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------

  const header = {
    ModuleName: 'ModuleName',
    ModuleCode: 'Module Code',
    ModuleLevel: 'Module Level',
    ModuleStartDate: 'Module Start Date',
    ModuleEndDate: 'Module End Date'
    }
  

  return (
      <>
      {
      !modules
          ? <p>No modules</p>
          : modules.length === 0
            ? <p>You are not in any modules.</p>
            : <ReAccordion
              data={modules}
              headers = {header}
              headerField = 'ModuleName'
              fieldOrder = {["ModuleName","ModuleCode","ModuleLevel","ModuleStartDate","ModuleEndDate"]}
              handlers={{setEdit, navigateToProject}}
            /> 
            /**Add button for add modules here */
      }
          <Button
          className="addModule"
          img="https://img.icons8.com/material-outlined/48/plus-math--v1.png"
          title = "Add Module"
          onClick = {handleSubmit}
          //call method to open modal
        />
  

        {/**Put this in a modal */}
        {
              showModuleForm &&
              <ModuleForm
                onPost = {handleModulePost}
                onPut = {handleModulePut}
                onCancel = {cancelModuleForm}
                module = {singleModule}
              />
        
        }
      </>
  )

}

export default LecturerHome;