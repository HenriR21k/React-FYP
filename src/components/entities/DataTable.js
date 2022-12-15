import { Button } from "../UI/Button.js";

function DataTable({objects, idKey, fieldOrder, headers, handlers}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------
  const ListOfHeaders = () => headers.map((value, index) => (
      <th key={index}>{value}</th>
    ));

  const ListOfCells = (rowObj) => fieldOrder.map((key, index) => (
      <td key={index}> { rowObj[key] } </td>
    ));

  

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
          <tbody>
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
                    <Button 
                    title="edit"
                    onClick={handleEdit}
                    /> 
                  </tr>
                )
              })
            }
            
          </tbody> 
        </table> 
  );
}

export default DataTable;