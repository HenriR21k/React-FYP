import { Button } from "../UI/Button.js";
import "../UI/Table.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import useLoad from '../api/useLoad.js';
import { useNavigate } from 'react-router-dom';

function AssignedTasksTable({objects, idKey, fieldOrder, headers, handlers, variant, user, group}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------

 

  const navigate = useNavigate();

  const ListOfHeaders = () => headers.map((value, index) => (
      <th key={index}>{value}</th>
    ));

    const ListOfCells = (rowObj) => fieldOrder.map((key, index) => {
  
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
      <td key={index}> { value } </td>
      )});

  // View ----------------------------------------
  return (
    !objects
      ? <p>No Data</p>
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

                    return (
                      <tr key={rowObj[idKey]}>
                        {
                          ListOfCells(rowObj)
                        }
    
          
                      </tr>
                    )
              })
            }
          </tbody> 
        </table> 
  );
}

export default AssignedTasksTable;