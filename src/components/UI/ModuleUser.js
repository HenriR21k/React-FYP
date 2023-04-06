import React from 'react';
import './GroupUser.css';
import { useState, useEffect } from 'react';
import useLoad from '../api/useLoad';
import Button from './Button';
import API from '../api/apiRequest';


function ModuleUser({ user, currentGroupID, loadUsers, isAssigned}) {

  const endpoint = `groups/${currentGroupID}/users`
  
  const handleAssignClick = async () => {
    // Make an API request to assign the user to the task
    

    let object = {
      UserID: user.UserID,
      GroupID: currentGroupID,
      GroupStatus: "Active"
    }

    console.log(object);
    const outcome = await API.post(`group/user`, object );
    console.log(loadUsers)
    await loadUsers(endpoint)
    
  }

  const handleUnassignClick = async () => {
    console.log(`[AssignedUsers] user=${JSON.stringify(isAssigned)}`)
    console.log(`[GroupUser] user=${JSON.stringify(user)}`);
    try {
      const outcome = await API.delete(`groupmember/${isAssigned.GroupmemberID}`);
      if (outcome.isSuccess) {
        await loadUsers(endpoint)
      } else {
        console.log('Unassign user failed');
      }
    } catch (error) {
      console.log(`Unassign user error: ${error}`);
    }
  }
  

  return (
    <div className='field'>
      {user.firstName} {user.lastName} isAssigned={`${isAssigned}`}

      {
        !isAssigned 
          ? <Button title="Add" onClick={handleAssignClick}/>
          : <Button title="Remove" onClick={handleUnassignClick}/>
      }
    </div>
  );
}

export default ModuleUser;
