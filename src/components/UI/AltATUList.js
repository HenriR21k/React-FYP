import classes from './GroupList.css';
import CardContainer from './CardContainer';
import AssignedToGroup from './AssignedToGroup';
import useLoad from '../api/useLoad';
import Button from './Button';
import { useState, useEffect } from 'react';
import ModuleMemberList from './ModuleMemberList';
import { useNavigate } from 'react-router-dom';

export function AltATUList(props) {

    const navigate = useNavigate();

    const endpoint = `groups/${props.currentGroupID}/users`
    const [UsersInGroup, setUsersInGroup, loadingMessage, loadUsersInGroup] = useLoad(endpoint)

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
      setShowModal(false);
      }
     
    const handleOpenModal = () => {
       
        setShowModal(true)

      };

      const navigateToProjectPage = function () {
     
        navigate("../GroupPage/ProjectPage", {
          state: {id: props.currentGroupID}
        })
      };

 

    useEffect(() => { loadUsersInGroup(endpoint) }, []);
   
    return (
        <>
          <CardContainer className={classes.list}>
            {
                !UsersInGroup
                ? <p>No users in group {}</p>
                : UsersInGroup.map(UserInGroup => {
                    return(
                    <AssignedToGroup 
                        key={UserInGroup.GroupID} 
                        UserInGroup = {UserInGroup} 
                    />
                    )
                })
                
            }
            {
                showModal && <ModuleMemberList
                  onCancel = {handleModalClose}
                  ModuleID = {props.ModuleID}
                  UsersInModule = {props.ModuleMembers}
                  loadUsersInGroup = {loadUsersInGroup}
                  GroupID = {props.currentGroupID}
                  UsersAssignedToGroup = {UsersInGroup}
                />
            }
            <Button
              className="assign"
              img="https://img.icons8.com/material-outlined/48/plus-math--v1.png"
              title = "Assign Users"
              onClick={() => handleOpenModal()}
            />
            <Button
              className="editBtn"
              title = "Access Group"
              img="https://img.icons8.com/ios-glyphs/256/long-arrow-right.png"
              onClick={() => navigateToProjectPage()}
              
            />
          </CardContainer>
       
          
        

        </>
       
    );

}

export default AltATUList;