import '../UI/Accordian.css'
import { useState } from 'react';

function ReAccordion({ data, headers, headerField, fieldOrder }) {
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReAccordion;