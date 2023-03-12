import { useState, useEffect } from "react";
import { API } from "../api/apiRequest.js";
import useLoad from "../api/useLoad.js";
import GroupList from "../UI/GroupList";
import './Home.css';
import TeamTable from "../entities/TeamTable";
import Table from "../entities/Table.js";
import Accordian from "../entities/Accordian.js";

function StudentHome(props) {
  // Properties ----------------------------
  const endpoint2 = `groups/users/${props.userID}`
  console.log(props.userID)
  // Hooks ---------------------------------
  const [groups, , loadingMessage] = useLoad(endpoint2)
  // Methods -------------------------------
  // View ---------------------------------

    return (
      <>
        <div className="Home">Your Teams</div>
        {
          <Table
            objects={groups}
            idKey='GroupID'
            fieldOrder={['GroupName']}
            headers={["Teams"]}
            variant="homepage"
          />
      }
  
      </>
    )



}

export default StudentHome;