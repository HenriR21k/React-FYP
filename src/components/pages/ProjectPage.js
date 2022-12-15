import GroupList from "../UI/GroupList";
import TaskForm from "../entities/TaskForm.js";
import { API } from "../api/apiRequest";
import { useLocation } from "react-router-dom";
import useLoad from '../api/useLoad.js';
import DataTable from "../entities/DataTable";
import Modal from "../UI/Modal";
import { useState, useEffect } from "react";
import Button from "../UI/Button";




const ProjectPage = (props) => {
  // Properties ----------------------------
  const { state } = useLocation(); // 
  const accessedGroupID = state;
  const endpoint = `groups/${accessedGroupID}/tasks`
  const [tasks, , loadingMessage] = useLoad(endpoint);
  
  const [singleTask, setSingleTask] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);

  //For post, it should have a null taskID
  let dummyObject = {
    TaskID: null,
  }

  useEffect(() => {setSingleTask(dummyObject)}, []);

  // Methods -------------------------------

  const handleGroupTaskPost = async (newTask) => {
    const outcome = await API.post('tasks', newTask);
    //fetchGroupTasks(); will be passed in as a handler throug props to redisplay groupTasks.
  }

  const handleGroupTaskPut = async (newTask) => {
    const outcome = await API.put('tasks/'+newTask.TaskID, newTask)
    

  }

  //Define method to open modal here?

  

  const handleSubmit = () => {
    setShowTaskForm(true);
  }

  const setEdit = (task) => {
    //This sets the singleTask so we can pass it into taskform
    setSingleTask(task);
    setShowTaskForm(true);
  }

  // View ----------------------------------
  /*
  Display tabs at the top 
  Display tabs header
  Display table
  Map out each element of an array using the accessedGroupID.
  Pass values into Table.js, columns and tasks.
   
  */
  return (
      <>
        <DataTable
          objects={tasks}
          idKey="TaskID"
          fieldOrder={['TaskTitle','TaskDescription','TaskStatus','TaskSetDate','TaskDeadline']}
          headers={["Task Title", "Task Description", "Task Status", 'TaskSetDate', 'TaskDeadline']}
          handlers={{setEdit}}
        />

        <Button
          title = "submit"
          onClick = {handleSubmit}
          //call method to open modal
        />
  

        {/**Put this in a modal */}
        {
              showTaskForm &&
              <TaskForm
                onPost = {handleGroupTaskPost}
                onPut = {handleGroupTaskPut}
                task = {singleTask}
                groupID = {accessedGroupID}
              />
        
        }
        
        
      
      </>
    

  )

}




export default ProjectPage;