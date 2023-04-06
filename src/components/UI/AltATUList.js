import classes from './GroupList.css';
import CardContainer from './CardContainer';
import AssignedToGroup from './AssignedToGroup';
import useLoad from '../api/useLoad';
import Button from './Button';
import { useEffect } from 'react';
import ModuleMemberList from './ModuleMemberList';

export function AltATUList(props) {

    const endpoint = `groups/${props.currentGroupID}/users`
    const [UsersInGroup, setUsersInGroup, loadingMessage, loadUsersInGroup] = useLoad(endpoint)

   

    const handleOpenModal = () => {
       
        props.openModal()

      };

 

      useEffect(() => { loadUsersInGroup(endpoint) }, []);
   
    return (
        <>
        
        <CardContainer className={classes.list}>
            {
                !UsersInGroup
                ? <p>No users in group</p>
                : UsersInGroup.map(UserInGroup => {
                    return(
                    <AssignedToGroup 
                        key={UserInGroup.GroupID} 
                        UserInGroup = {UserInGroup} 
                    />
                    )
                })
            }
        <Button
            className="addTask"
            img="https://img.icons8.com/material-outlined/48/plus-math--v1.png"
            title = "Assign Users"
            onClick={() => handleOpenModal()}
            
        />
        </CardContainer>
        {
        !UsersInGroup
        ? <p>No users</p>
        : props.showModal &&
          <ModuleMemberList
            onCancel = {props.closeModal}
            ModuleID = {props.ModuleID}
            UsersInModule = {props.ModuleMembers}
            loadUsersInGroup = {loadUsersInGroup}
            GroupID = {props.currentGroupID}
            UsersAssignedToGroup = {UsersInGroup}
          />
        }

        </>
       
    );

}

export default AltATUList;