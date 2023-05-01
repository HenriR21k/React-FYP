
import useLoad from '../api/useLoad.js';
import { useNavigate } from 'react-router-dom';
import Button from './Button.js';
import API from '../api/apiRequest.js';


function StudentNameCard(props) {
  //Initialisation -------------------
  const fetchStudentsInModule = `module/${props.accessedModuleID}/users`

  const handleAssignClick = async () => {
    // Make an API request to assign the user to the task
    // using the taskID and userID
    let object = {
      UserID: props.user.UserID,
      ModuleID: props.accessedModuleID
    }
    const outcome = await API.post(`users/modules`, object );
    await props.loadMembers(fetchStudentsInModule)
  }

  const handleUnassignClick = async () => {
    
    try {
      const outcome = await API.delete(`users/modules/${props.isAssigned.UserModuleID}`);
      if (outcome.isSuccess) {
        await props.loadMembers(fetchStudentsInModule)
      } else {
        console.log('Unassign user failed');
      }
    } catch (error) {
      console.log(`Unassign user error: ${error}`);
    }
  }

  return (

    <div className="StudentNameCard">
      
      <div className='StudentCard'>
        {     
         <p>{props.user.firstName+" "+props.user.lastName}
          {
          !props.isAssigned 
            ? <Button className="add" title="Add" onClick={handleAssignClick}/>
            : <Button className="remove" title="Remove" onClick={handleUnassignClick}/>
          }
         
         </p> 
        }
      </div>
    </div>
  )
};

export default StudentNameCard;