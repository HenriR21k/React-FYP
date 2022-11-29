import { useState, useEffect } from "react";
import { API } from "../api/apiRequest";
import useLoad from "../api/useLoad";
import GroupList from "../UI/GroupList";
import './Home.css';

function Home() {
  // Initialisation ------------------------------
  const loggedInUserID = 42;
  const endpoint = `groups/users/${loggedInUserID}`

  //State
  const [groups, , loadingMessage] = useLoad(endpoint)
  
  // View ----------------------------------------
  return (
    <section>
      <div className="Home">Your Teams</div>
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