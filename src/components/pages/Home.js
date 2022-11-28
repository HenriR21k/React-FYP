import { useState, useEffect } from "react";
import GroupList from "../UI/GroupList";
import './Home.css';

function Home() {
  // Initialisation ------------------------------
  const loggedInUserID = 42;
  const endpoint = `/groups/users/${loggedInUserID}`
  
  
  // State ---------------------------------------
  const [groups, setGroups] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState('Loading records ...');

  // Context -------------------------------------
  // Methods -------------------------------------
  const apiCall = async (endpoint) => {
  const URL = 'http://localhost:5000/api';
  const endpointAddress = URL + endpoint;
  const response = await fetch(endpointAddress)
  
  const result = await response.json();
  
  setGroups(result);
  }

  useEffect(() => { apiCall(endpoint) }, []);
  //apiCall(endpoint);

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