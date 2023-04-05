import React from 'react';
import './GroupUser.css';
import { useState, useEffect } from 'react';
import useLoad from '../api/useLoad';
import Button from './Button';
import API from '../api/apiRequest';


function GroupUser({ user, taskID, loadUsers }) {

  const endpoint = `task/${taskID}/users/${user.UserID}`;
  const endpoint3 = `tasks/${taskID}/users`
  const [isAssigned, setIsAssigned, loadingMessage, loadIsAssigned] = useLoad(endpoint);

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
    if (isAssigned) {
      console.log(isAssigned[0].TaskUserID)
      const outcome = await API.delete(`unAssignTask/${isAssigned[0].TaskUserID}`);
      await loadIsAssigned(endpoint)
      setIsAssigned(false)
      loadUsers(endpoint3)
    }
  }

  useEffect(() => { loadIsAssigned(endpoint) }, []);

  return (
    <div className='field'>
      {user.firstName} {user.lastName}
      {isAssigned === null 
        ? <Button title="Assign Task" onClick={handleAssignClick}/>
        : <Button title="UnAssign Task" onClick={handleUnassignClick}/>
      }
    </div>
  );
}

export default GroupUser;
