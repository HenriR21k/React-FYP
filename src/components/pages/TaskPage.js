import { useState, useEffect } from "react";
import { API } from "../api/apiRequest.js";
import useLoad from "../api/useLoad.js";
import { useLocation } from "react-router-dom";
import AssignedUsersList from "../UI/AssignedUsersList";
import PostList from "../UI/PostList.js";
import './TaskPage.css';
import Button from "../UI/Button.js";
import GroupMemberList from "../UI/GroupMemberList.js";
import { Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field } from "../UI/FormComponents.js";

function TaskPage() {
  // Initialisation ------------------------------
  
  const { state } = useLocation();
  const accessedTaskID = state.id;
  const user = state.user
  const group = state.group
  
  const endpoint = `tasks/${accessedTaskID}`
  const endpoint2 = `tasks/${accessedTaskID}/posts`
  const endpoint3 = `tasks/${accessedTaskID}/users`
  const endpoint4 = `groups/${group}/users`

  //State
  const [task, , loadingMessage] = useLoad(endpoint)
  const [groupUsers, setGroupUsers, loadingMessage4, loadGroupUsers] = useLoad(endpoint4) //users in the group
  const [posts, setPosts ,loadingMessage2, loadPosts] = useLoad(endpoint2);
  const [users, setUsers , loadingMessage3, loadUsers] = useLoad(endpoint3); //users assigned to a task

  useEffect(() => { loadUsers(endpoint3) }, []);

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
  setShowModal(false);
  }

  const handleButtonClick = (user) => {
      setShowModal(true);
  }
  
  

  useEffect(() => {loadPosts(endpoint2)}, []);

  const [PostDescription, setPostDescription] = useState(null);

  const handleFeedbackPost = async (newPost) => {
    const outcome = await API.post('tasks/posts', newPost);
    loadPosts(endpoint2)
  }

  const handleChange = (event) => {
    //  const updatedPost = {...posts, [event.target.name]: event.target.value};
    setPostDescription(event.target.value);
    console.log(PostDescription);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    let posts = {
        TaskID: accessedTaskID,
        UserID: user,
        PostDescription: PostDescription,
        PostDate: new Date().toISOString()
    }

    if (posts.PostDescription === null || posts.PostDescription === '') {
        alert("Please do not leave post field blank")
    }
    else {
        handleFeedbackPost(posts)
        setPostDescription('');
    }
    

    }

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
            ? <p>No users assigned to the task...</p>
            : users.length === 0
              ? <p>No users assigned to this task.</p>
              : <AssignedUsersList
                users={users}
              />
          }
           <Button
            className="addTask"
            img="https://img.icons8.com/material-outlined/48/plus-math--v1.png"
            title = "Assign Users"
            onClick = {handleButtonClick}
            
          //call method to open modal
        />
        </div>

          {
              showModal &&
              <GroupMemberList
                onCancel = {handleModalClose}
                taskID = {accessedTaskID}
                groupUsers = {groupUsers}
                loadUsers = {loadUsers}
                users = {users}
                setUsers = {setUsers}
              />
          }

        <div className="PostsItem">
          <h1>Posts</h1>
          <FormTextArea name = "PostDescription" placeholder = "Enter Post (max 300 char)..." value={PostDescription} onChange={handleChange}/>
                <Button
                    className="addPost"
                    img="https://img.icons8.com/material-outlined/48/plus-math--v1.png"
                    title = "Submit Post"
                    type = "Button"
                    onClick={handleSubmit}
                />
          {
          !posts
            ? <p></p>
            : posts.length === 0
              ? <p>You do not have any posts.</p>
              :   <PostList
                    posts={posts}
                    loadPosts={loadPosts}
                    TaskID={accessedTaskID}
                    user={user}
                    
                  />
                
              
          }
        </div>
      </div>
    </div>    
    </>
  )
}

export default TaskPage;