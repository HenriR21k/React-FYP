import { useState, useEffect } from "react";
import { API } from "../api/apiRequest";
import GroupList from "../UI/GroupList";
import './Home.css';

function Home() {
  // Initialisation ------------------------------
  const loggedInUserID = 42;
    
  // State ---------------------------------------
  // UseLoad -------------------------------------
  const [groups, setGroups] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState('Loading records ...');

  // Context -------------------------------------
  // Methods -------------------------------------
  const loadUsersTeams = async (UserID) => {  
  const response = await API.get(`groups/users/${UserID}`);
  response.isSuccess
    ? setGroups(response.result)
    : setLoadingMessage(response.message);
  }

  useEffect(() => { loadUsersTeams(loggedInUserID) }, []);
  

  // View ----------------------------------------
  return (
    <section>
      <div className="Home">Your Projects</div>
      {
        !groups
          ? <p>{loadingMessage}</p>
          : groups.length === 0
            ? <p>You are not in any groups.</p>
            : <GroupList
              groups={groups}
              userID={loggedInUserID}
            />
      }
    </section>
  )
}

/*
groups.map((group) => 
                <p>{group.GroupName}</p>
              )
*/

export default Home;