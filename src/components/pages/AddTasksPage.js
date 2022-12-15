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

  const handleGroupTaskPost = async (newTask) => {
    const outcome = await API.post('tasks', newTask);
    //fetchGroupTasks(); will be passed in as a handler throug props to redisplay groupTasks.
  }


  // View ----------------------------------

  return (
      <>
      <TaskForm
      groupID = {accessedGroupID}
      onPost = {handleGroupTaskPost}
      /> 
      

      </>

  )

}

export default AddTasksPage;