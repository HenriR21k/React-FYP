import { Button } from "../UI/Button.js";
import "../UI/Table.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import useLoad from '../api/useLoad.js';
import { useNavigate } from 'react-router-dom';


function Table({objects, idKey, fieldOrder, headers, handlers, variant, user}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------

  const navigate = useNavigate();

  const ListOfHeaders = () => headers.map((value, index) => (
      <th key={index}>{value}</th>
  ));

    const ListOfCells = (rowObj) => fieldOrder.map((key, index) => {

      console.log("key: "+key)
      let test = JSON.stringify(rowObj)
      console.log("TeamTableValue: "+test["groupName"])
      
    

      const navigateToTaskPage = function () {
        navigate("../GroupPage/ProjectPage/TaskPage", {
          state: rowObj[idKey]
        })
      };

      const navigateToProjectPage = function () {
        console.log("This page:"+user);
        navigate("../GroupPage/ProjectPage", {
          state: {id: rowObj[idKey], user: user}
        })
      };

      switch(variant) {
        case 'TasksPage':
          let value = rowObj[key];
          if (key === "TaskSetDate") {
            const c = { time: rowObj[key] };
            value = new Date(c.time).toLocaleDateString();
          }
          if (key === "TaskDeadline") {
            const c = { time: rowObj[key] };
            value = new Date(c.time).toLocaleDateString();
          } 
          
          return (
          <td key={index} onClick={navigateToTaskPage}> { value } </td>
          )
        case 'homepage':
          return (
            <td key={index} onClick={navigateToProjectPage}> { rowObj[key] } </td>
            )

      }

      }
      
      );

  // View ----------------------------------------
  return (
    !objects
      ? <p>No Data on Team Table</p>
      : <table>
          <thead>
              <tr>
                {
                  ListOfHeaders()
                }
             </tr>
          </thead> 
          <tbody className="tableBody">
            {
              objects.map((rowObj) => {
                const handleEdit = () => handlers.setEdit(rowObj);

                  switch(variant) {
                    case "TasksPage":
                      return (
                        <tr key={rowObj[idKey]}>
                          {
                            ListOfCells(rowObj)
                          }
      
                          { 
                          <div className="Button">
                            <Button
                            className="editBtn" 
                            title=""
                            img="https://img.icons8.com/ios-glyphs/344/edit--v1.png"
                            onClick={handleEdit}
                            />
                          </div>
                          }
                        </tr>
                      )
                    case "homepage":
                      return (
                        <tr key={rowObj[idKey]}>
                          {
                            ListOfCells(rowObj)
                          }
                        </tr>
                      )
                  }
                    
                  
                
              })
            }
          </tbody> 
        </table> 
  );
}

export default Table;