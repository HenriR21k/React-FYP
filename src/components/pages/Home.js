import { useState, useEffect } from "react";
import { API } from "../api/apiRequest.js";
import useLoad from "../api/useLoad.js";
import GroupList from "../UI/GroupList";
import './Home.css';
import TeamTable from "../entities/TeamTable";
import Table from "../entities/Table.js";

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

      {/*
        !groups
          ? <p>{loadingMessage}</p>
          : groups.length === 0
            ? <p>You are not in any groups.</p>
            : <GroupList
              groups={groups}
              userID={loggedInUserID}
            />     
  */}
      {
        
            <Table
              objects={groups}
              idKey='GroupID'
              fieldOrder={['GroupName']}
              headers={["Teams"]}
              variant="homepage"
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