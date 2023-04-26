import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import useLoad from "../api/useLoad";
import StudentList from "../UI/StudentList";

function AssignUserToModulePage() {
  // Properties ----------------------------
  const { state } = useLocation(); // 
  const accessedModuleID = state.id;
  
  const fetchStudentsEndpoint = "users/userType/2"
  const [users, setUsers, loadingMessage, loadUsers] = useLoad(fetchStudentsEndpoint)

  const fetchStudentsInModule = `module/${accessedModuleID}/users`
  const [members, setMembers, loadingMessage2, loadMembers] = useLoad(fetchStudentsInModule)

  

  useEffect(() => {loadUsers(fetchStudentsEndpoint)}, []);

  useEffect(() => {loadMembers(fetchStudentsInModule)}, []);

  // Hooks ---------------------------------
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------

  return (
      <>
      {!users && !members
        ? <loadingMessage/>
        : <StudentList
          users = {users}
          members = {members}
          loadMembers = {loadMembers}
          />
      
      
      }
     
      </>
  )

}

export default AssignUserToModulePage;