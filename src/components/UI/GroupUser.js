import React from 'react';
import './GroupUser.css';
import { useState, useEffect } from 'react';
import useLoad from '../api/useLoad';
import Button from './Button';
import API from '../api/apiRequest';


function GroupUser({ user, taskID, loadUsers, isAssigned, AssignedUserList, setUser }) {

  //const endpoint = `task/${taskID}/users/${user.UserID}`;
  const endpointAssignedUser = `tasks/${taskID}/users`
  
  //const [isAssigned, setIsAssigned, loadingMessage, loadIsAssigned] = useLoad(endpoint);

  /*
  const handleAssignClick = async () => {
    // Make an API request to assign the user to the task
    // using the taskID and userID
    let object = {
      UserID: user.UserID,
      TaskID: taskID
    }
    const outcome = await API.post(`assignTask`, object );

    loadIsAssigned(endpoint)
    loadUsers(endpoint3)
  }

  const handleUnassignClick = async () => {

    
      console.log(isAssigned[0].TaskUserID)
      const outcome = await API.delete(`unAssignTask/${isAssigned[0].TaskUserID}`);
      loadIsAssigned(endpoint);
      console.log(`isAssigned (after)=[${JSON.stringify(isAssigned)}]`)
      loadUsers(endpoint3);
      setIsAssigned(null)
      if (AssignedUserList.length === 1) {setUser(null)}

  }

  useEffect(() => { loadIsAssigned(endpoint) }, []);
  */

  const handleAssignClick = async () => {
    // Make an API request to assign the user to the task
    // using the taskID and userID
    let object = {
      UserID: user.UserID,
      TaskID: taskID
    }
    const outcome = await API.post(`assignTask`, object );
    await loadUsers(endpointAssignedUser)
  }

  const handleUnassignClick = async () => {
    console.log(`[AssignedUsers] user=${JSON.stringify(isAssigned)}`)
    console.log(`[GroupUser] user=${JSON.stringify(user)}`);
    try {
      const outcome = await API.delete(`unAssignTask/${isAssigned.TaskUserID}`);
      if (outcome.isSuccess) {
        await loadUsers(endpointAssignedUser);
      } else {
        console.log('Unassign task failed');
      }
    } catch (error) {
      console.log(`Unassign task error: ${error}`);
    }
  }
  

  return (
    <div className='field'>
      {user.firstName} {user.lastName} isAssigned={`${isAssigned}`}
      {/* {isAssigned === null 
        ? <Button title="Assign Task" onClick={handleAssignClick}/>
        : <Button title="UnAssign Task" onClick={handleUnassignClick}/>
      } */}
      {
        !isAssigned 
          ? <Button title="Assign Task" onClick={handleAssignClick}/>
          : <Button title="UnAssign Task" onClick={handleUnassignClick}/>
      }
    </div>
  );
}

export default GroupUser;
