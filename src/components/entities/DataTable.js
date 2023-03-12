import { Button } from "../UI/Button.js";
import "../UI/Table.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import useLoad from '../api/useLoad.js';
import { useNavigate } from 'react-router-dom';

function DataTable({objects, idKey, fieldOrder, headers, handlers, variant}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------

 

  const navigate = useNavigate();

  const ListOfHeaders = () => headers.map((value, index) => (
      <th key={index}>{value}</th>
    ));

    const ListOfCells = (rowObj) => fieldOrder.map((key, index) => {

      const navigateToTaskPage = function () {
        navigate("../GroupPage/ProjectPage/TaskPage", {
          state: rowObj[idKey]
        })
      };
  
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
                const handleEdit = () => handlers.setEdit(rowObj);

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
              })
            }
          </tbody> 
        </table> 
  );
}

export default DataTable;