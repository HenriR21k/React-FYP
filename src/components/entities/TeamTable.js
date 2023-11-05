import { Button } from "../UI/Button.js";
import "../UI/Table.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import useLoad from '../api/useLoad.js';
import { useNavigate } from 'react-router-dom';

function TeamTable({objects, idKey, fieldOrder, headers, handlers, variant}) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------

  console.log(objects);

  const navigate = useNavigate();

  const ListOfHeaders = () => headers.map((value, index) => (
      <th key={index}>{value}</th>
    ));

  const ListOfCells = (rowObj) => fieldOrder.map((key, index) => {

      console.log("Team Table"+rowObj[key]);
      return (   
      <td key={index}> { rowObj[key] } </td>
      )
  });

  // View ----------------------------------------
  return (
    !objects
      ? <p>No Data on Team Table</p>
      :<table>
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
            return (
              <tr
                key={rowObj[idKey]}
              >
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

export default TeamTable;