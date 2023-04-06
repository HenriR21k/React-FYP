import { API } from "../api/apiRequest";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useLoad from "../api/useLoad";
import { useState, useEffect } from "react";
import Accordian from "../entities/Accordian";
import Button from "../UI/Button";
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
  
  const [currentGroupID, setCurrentGroupID] = useState();
  const [showModal, setShowModal] = useState(false);

  const [groupmembers, setGroupmembers] = useState();




  const handleModalClose = () => {
  setShowModal(false);
  }

  const handleButtonClick = () => {
      setShowModal(true);
  }

  // const currentGroup = (groupID) => {
  //   //When it is called, pass in the groupID
  //   setCurrentGroupID(groupID);
  //   console.log(currentGroupID);
  // }

  // const handleAssignUsers = (loadUsersInGroup, endpoint) => {
  //   console.log("top layer"+loadUsersInGroup)
  //   console.log(endpoint)
  //   loadUsersInGroup(endpoint)
  // };

  // const getCurrentGroupmembers = (currentMembers) => {
  //   setGroupmembers(currentMembers)
  // }

  //ProjectID / ModuleID - pass values into accordian. Pass projectID into accordian, renders list of groups by title.
  //Then inside, create a list of mapped out student containers, so those assigned to the group. 
  //-----------------------------------------------------------------------------------------------------
  //Then add a button outside
  //the list. Modal opens up a list of students in the module. Execute function during the listing. Then use same code as previous example.
  // Hooks ---------------------------------
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------

  return (
      <>
        <Accordian 
        groups={groups}
        loadGroups={loadGroups}
        ModuleID={accessedModuleID}
        ModuleMembers={moduleMembers}
        closeModal={handleModalClose}
        openModal={handleButtonClick}
        showModal={showModal}
        // fetchCurrentGroup={currentGroup}
        // onAssignUsers={handleAssignUsers}
        // getCurrentGroupmembers={getCurrentGroupmembers}
        />

        {/* {
          showModal &&
          <ModuleMemberList
            onCancel = {handleModalClose}
            ModuleID = {accessedModuleID}
            UsersInModule = {moduleMembers}
            handleAssignUsers = {handleAssignUsers} //load assigned users in group
            GroupID = {currentGroupID}
            UsersAssignedToGroup = {groupmembers}
          />
        } */}

      </>
  )

}

export default ModulesProjectsGroups;