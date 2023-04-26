import '../UI/Accordian.css'
import { useState } from 'react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';


function ReAccordion({ data, headers, headerField, fieldOrder, handlers }) {

  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  const renderFields = (item) => {
    return fieldOrder.map((field) => {
     
      let value = item[field];
     
      if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)) {
        // Check if the value is a date string in ISO format
        const date = new Date(value);
        value = date.toLocaleDateString();
      }
  
      console.log(headerField[field])

      return (
        <div className='fields'>
          <div className='label'>
            <h2>{headers[field]}</h2>
          </div>
          <div className='value'>
            <h2>{value}</h2>
          </div>
        </div>
      );
    });
  };
  
  const handleEdit = (item) => {
    handlers.setEdit(item);
  };

  const handleGetItem = (item) => {
    handlers.navigateToProject(item)
    console.log(item)
  };

  const handleOpenAssign = (item) => {

    navigate("../Modules/Assign", {
      state: {id: item.ModuleID}
    })

  }

  //if header to name === ModuleName, display button
  //when button is clicked take user to AssignUserPage

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item, i) => (

          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
              <h2>{item[headers[headerField]]}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {renderFields(item)}
              <Button title='Edit' onClick={() => handleEdit(item)} />
              <Button title='Navigate' onClick={() => handleGetItem(item)} />
              {headerField==="ModuleName" ? <Button title='Assign' onClick={() => handleOpenAssign(item)} /> : null}
              
              

            </div>
            
          </div>
        ))}
        
      </div>
      
    </div>
  );
}

export default ReAccordion;