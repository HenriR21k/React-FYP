import { Button } from "../UI/Button.js";
import "../UI/Table.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

function DataTable({objects, idKey, fieldOrder, headers, handlers}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------

  /*function checkSetDateorDeadline(rowObj, key) {
    if (key = "TaskSetDate") {
      const c = { time: rowObj[key] };
      return new Date(c.time).toLocaleDateString();
    }

    if (key = "TaskDeadline") {
      const c = { time: rowObj[key] };
      return new Date(c.time).toLocaleDateString();
    }
  }*/

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

  

  //Create a methed to pass the object.taskID in and use that for to post in the endpoint.

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
                
                  <tr //maps out data for each row and gives it an id.
                    key={rowObj[idKey]}
                  >
                    {
                      ListOfCells(rowObj)
                    }
                    <div className="Button">
                      <Button
                      className="editBtn" 
                      title=""
                      img="https://img.icons8.com/ios-glyphs/344/edit--v1.png"
                      onClick={handleEdit}
                    />
                    </div> 
                  </tr>
                  
                  
                )
              })
            }
            
          </tbody> 
        </table> 
  );
}

export default DataTable;