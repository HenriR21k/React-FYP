import { API } from "../api/apiRequest";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useLoad from "../api/useLoad";
import { useState, useEffect } from "react";
import Accordian from "../entities/Accordian";
import Button from "../UI/Button";
import GroupForm from "../entities/GroupForm";
import ProjectForm from "../entities/ProjectForm";
import ModuleMemberList from "../UI/ModuleMemberList";
import { useRef } from "react";

function ModulesProjectsGroups() {
  // Properties ----------------------------
  const { state } = useLocation(); // 
  const accessedProjectID = state.id;
  const accessedModuleID = state.ModuleID

  const endpoint = `projects/${accessedProjectID}/groups`
  const [groups, setGroups, loadingMessage, loadGroups] = useLoad(endpoint)

  const endpoint2 = `module/${accessedModuleID}/users`
  const [moduleMembers, setModuleMembers, loadingMessage2, loadModuleMembers] = useLoad(endpoint2)

  const [singleGroup, setSingleGroup] = useState(null);
  const [showGroupForm, setShowGroupForm] = useState(false);

  useEffect(() => {loadGroups(endpoint)}, []);

  let dummyObject = {
    GroupID: null,
  }

  useEffect(() => {setSingleGroup(dummyObject)}, []);

  // Methods -------------------------------

  const handleGroupPost = async (newTask) => {
    const outcome = await API.post('Groups', newTask);
  }


  const cancelGroupForm = () => {
    setShowGroupForm(false);
    loadGroups(endpoint)
    setSingleGroup(dummyObject);
    
  }

  const handleSubmit = () => {
    setShowGroupForm(true);
  }
  

  return (
      <>
        <Accordian 
        groups={groups}
        loadGroups={loadGroups}
        ModuleID={accessedModuleID}
        ModuleMembers={moduleMembers}
        />

        <Button
          className="addTask"
          img="https://img.icons8.com/material-outlined/48/plus-math--v1.png"
          title = "Create Group"
          onClick = {handleSubmit}
        />
     
        {
              showGroupForm &&
              <GroupForm
                onPost = {handleGroupPost}
                onCancel = {cancelGroupForm}
                group = {singleGroup}
                projectID = {accessedProjectID}
                loadGroups = {loadGroups}
              />
        }

      </>
  )

}

export default ModulesProjectsGroups;