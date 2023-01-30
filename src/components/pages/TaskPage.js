import { useState, useEffect } from "react";
import { API } from "../api/apiRequest.js";
import useLoad from "../api/useLoad.js";
import { useLocation } from "react-router-dom";
import './TaskPage.css';



function TaskPage() {
  // Initialisation ------------------------------
  
  const { state } = useLocation();
  const accessedTaskID = state;
  const endpoint = `tasks/${accessedTaskID}`
  const endpoint2 = `tasks/${accessedTaskID}/posts`
  const endpoint3 = `tasks/${accessedTaskID}/users`

  //State
  const [task, , loadingMessage] = useLoad(endpoint)
  const [posts, , loadingMessage2] = useLoad(endpoint2);
  const [users, , loadingMessage3] = useLoad(endpoint3);

 

  // Plan
  /*
  So the idea is to have three different divs in a gridlayout
  Have the task description on the left, users assigned on right
  And the posts below
  I'll need to prop drill the posts and users into its own class since they'll be an array of objects.

  The priority is to first assemble the gridlayout just using 3 divs, then render the description 
  also remove task description from rowobjs
  
  */
  
  
  // View ----------------------------------------
  return (
    <>
    <div className="border">
      <div className="grid-container">

        <div className="TaskDesc">
        {
        !task
          ?<p>No tasks</p>
          :
           <>
           <h1>{task[0].TaskTitle}</h1>

           <p>{task[0].TaskDescription}</p>
           </>
        }
        </div>
        {/**Plug this through a group container class */}
        <div className="AssignedItem">
        Assigned Users to Task:

        </div>

        {/**Plug this through a group container class. */}
        <div className="PostsItem">
          posts
        </div>


      </div>
    </div>

    
    </>
  )
}


export default TaskPage;