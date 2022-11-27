import GroupList from "../UI/GroupList";
import TaskForm from "../entities/TaskForm.js";
import { API } from "../api/apiRequest";
import { useLocation } from "react-router-dom";


const AddTasksPage = (props) => {
  // Properties ----------------------------

  /*
  Contextual Value = groupID
  groupID is passed when we navigate to another page
  however since I haven't figured out how to do that,
  I'm setting the groupID to be 1

  */
  
  
 
  const { state } = useLocation(); // 
  console.log(state);
  const accessedGroupID = state;

  

  //const accessedGroupID = location.state.value;
  //console.log(accessedGroupID)
  // Hooks ---------------------------------
  // Methods -------------------------------

  const handleGroupTaskPost = async (newTask) => {

    console.log("input of post: "+JSON.stringify(newTask)); 
    const outcome = await API.post('tasks', newTask);
    
    console.log("outcome of post: "+JSON.stringify(outcome.response));
    //fetchGroupTasks(); will be passed in as a handler throug props to redisplay groupTasks.
  }

  //const { state: { infoId } = {} } = useLocation();
  // View ----------------------------------

  return (
      <>
      <TaskForm
      groupID = {accessedGroupID}
      onPost = {handleGroupTaskPost}
      /> {/**Pass in the groupID as a parameter */}
      

      </>

  )

}

export default AddTasksPage;