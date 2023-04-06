import classes from './GroupList.css';
import CardContainer from './CardContainer';
import AssignedToGroup from './AssignedToGroup';
import useLoad from '../api/useLoad';
import Button from './Button';
import { useEffect } from 'react';

export function AssignedToGroupList(props) {

    const endpoint = `groups/${props.currentGroupID}/users`
    const [UsersInGroup, setUsersInGroup, loadingMessage, loadUsersInGroup] = useLoad(endpoint)

   

    const handleGetItem = (id, groupmembers, loadFunction) => {
        props.fetchCurrentGroup(id)
        props.getCurrentGroupmembers(groupmembers)
       // props.onAssignUsers(loadFunction, endpoint)
        props.openModal()

      };

 

      useEffect(() => { loadUsersInGroup(endpoint) }, []);
   
    return (
        
        
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
            onClick={() => handleGetItem(props.currentGroupID, UsersInGroup, loadUsersInGroup)}
            
        />
        </CardContainer>
       
    );

}

export default AssignedToGroupList;