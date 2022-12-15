import './GroupNameCard.css';
import './TaskCard.js';
import useLoad from '../api/useLoad.js';
import { useNavigate } from 'react-router-dom';


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

  const navigateToProjectPage = function () {
    navigate("../GroupPage/ProjectPage", {
      state: group.GroupID
    })
  };
  
  return (

    <div className="GroupNameCard">
      <p onClick={navigateToProjectPage}>Group {group.GroupID}: {group.GroupName}</p>
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