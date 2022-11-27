import './GroupNameCard.css';
import './TaskCard.js';
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import AddTasksPage from '../pages/AddTasksPage';

function GroupNameCard({group, userID}) {
  //Initialisation -------------------
  console.log(`group=[${JSON.stringify(group)}]`);
  console.log(`userid=[${userID}]`);
  
  const endpoint = `/groups/${group.GroupID}/users/${userID}/tasks`
  const navigate = useNavigate();
  // State ---------------------------------------
  const [tasks, setTasks] = useState(null);

  // Methods -------------------------------------
  const apiCall = async (endpoint) => {
    const URL = 'http://localhost:5000/api';
    const endpointAddress = URL + endpoint;
    const response = await fetch(endpointAddress);
    const result = await response.json();
    setTasks(result);
  }
  
  useEffect(() => { apiCall(endpoint) }, []);

  const NavigateToAddTasksForm = () => {
   // console.log(`groupCode=${groupCode}`);

    //include navigate statement with params
   
    navigate('../GroupPage/AddTaskPage', {state: group.GroupID
    });
  }

  const valuePassing = function () {
    navigate("../GroupPage/AddTaskPage", {
      state: group.GroupID
      
    })
  };



  //() => NavigateToAddTasksForm(group.GroupID)

  
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