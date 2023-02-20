import { useState, useEffect } from "react";
import { API } from "../api/apiRequest.js";
import useLoad from "../api/useLoad.js";
import { useLocation } from "react-router-dom";
import AssignedUsersList from "../UI/AssignedUsersList";
import PostList from "../UI/PostList.js";
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
        
        <div className="AssignedItem">
        <p>Assigned Users to Task:</p>
          {
          !users
            ? <p>{loadingMessage}</p>
            : users.length === 0
              ? <p>No users assigned to this task.</p>
              : <AssignedUsersList
                users={users}
                
              />
          }
        </div>

        <div className="PostsItem">
          <h1>Feedback</h1>
          {
          !posts
            ? <p>{loadingMessage}</p>
            : posts.length === 0
              ? <p>You do not have any posts.</p>
              : <PostList
                posts={posts}
              />
          }
        </div>
      </div>
    </div>    
    </>
  )
}

export default TaskPage;