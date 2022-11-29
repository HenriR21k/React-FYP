import './GroupNameCard.css';
import './TaskCard.js';
import { useState, useEffect } from "react";
import useLoad from '../api/useLoad.js';
import API from '../api/apiRequest.js';
import { Navigate, useNavigate } from 'react-router-dom';
import AddTasksPage from '../pages/AddTasksPage';

function GroupNameCard({group, userID}) {
  //Initialisation -------------------
  //console.log(`group=[${JSON.stringify(group)}]`);
  //console.log(`userid=[${userID}]`);
  
  const endpoint = `groups/${group.GroupID}/users/${userID}/tasks`
  const navigate = useNavigate();
 
  const [tasks, , loadingMessage] = useLoad(endpoint)


  const valuePassing = function () {
    navigate("../GroupPage/AddTaskPage", {
      state: group.GroupID
      
    })
  };
  
  return (

    <div className="GroupNameCard">
      <p onClick={valuePassing}>Group {group.GroupID}: {group.GroupName}</p>
      <div className='TaskCard'>
        {
          !tasks
            ? <p>No tasks found</p>
            : tasks.map((task) => {
                return (
                  <div>
                    <ul>
                      <li>{task.TaskTitle}</li>
                    </ul>
                  </div>
                );
              })
        }
      </div>
    </div>
  )
};

export default GroupNameCard;