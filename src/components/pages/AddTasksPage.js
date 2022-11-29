import GroupList from "../UI/GroupList";
import TaskForm from "../entities/TaskForm.js";
import { API } from "../api/apiRequest";
import { useLocation } from "react-router-dom";


const AddTasksPage = (props) => {
  // Properties ----------------------------

  const { state } = useLocation(); // 
  console.log(state);
  const accessedGroupID = state;

  // Hooks ---------------------------------
  // Methods -------------------------------

  //UseLoad
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