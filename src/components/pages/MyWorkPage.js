import { useLocation } from 'react-router-dom';
import useLoad from '../api/useLoad.js';
import { useAuth } from '../auth/useAuth.js';
import AssignedTasksTable from '../entities/AssignTasksTable.js';

function MyWorkPage() {
  // Properties ----------------------------
  // needs to take user id to work
  const { loggedinUser } = useAuth();

  const endpoint = `user/${loggedinUser}/tasks`
  const [assignedTasks, setAssignedTasks, loadingMessage, loadAssignedTasks] = useLoad(endpoint)
  console.log(assignedTasks)

  // Hooks ---------------------------------
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------

  return (
      <>
      
       <AssignedTasksTable
          objects={assignedTasks}
          idKey="TaskID"
          fieldOrder={['TaskTitle','TaskStatus','TaskSetDate','TaskDeadline', 'groupName']}
          headers={["Task Title", "Task Status", 'Task Set Date', 'Task Deadline', 'Assigned By']}
          
          
        />
       
      
      </>

  )

}

export default MyWorkPage;