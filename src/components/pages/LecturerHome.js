import { useState, useEffect } from "react";
import { API } from "../api/apiRequest.js";
import useLoad from "../api/useLoad.js";
import GroupList from "../UI/GroupList";
import './Home.css';
import TeamTable from "../entities/TeamTable";
import Table from "../entities/Table.js";
import Accordian from "../entities/Accordian.js";
import ReAccordion from "../entities/ReAccordion.js";

function LecturerHome() {
  // Properties ----------------------------
  const endpoint3 = `modules`
  // Hooks ---------------------------------
  const [modules, , loadingMessage3] = useLoad(endpoint3)
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------

  const header = {
    ModuleName: 'ModuleName',
    ModuleCode: 'Module Code',
    ModuleLevel: 'Module Level',
    ModuleStartDate: 'Module Start Date',
    ModuleEndDate: 'Module End Date'
    }
  

  return (
      <>
      {
      !modules
          ? <p>No modules</p>
          : modules.length === 0
            ? <p>You are not in any modules.</p>
            : <ReAccordion
              data={modules}
              headers = {header}
              headerField = 'ModuleName'
              fieldOrder = {["ModuleName","ModuleCode","ModuleLevel","ModuleStartDate","ModuleEndDate"]}
            /> 
            /**Add button for add modules here */
      } 
      </>
  )

}

export default LecturerHome;