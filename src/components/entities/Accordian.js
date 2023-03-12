import '../UI/Accordian.css'
import { useState } from 'react';

function Accordian(props) {
  // Properties ----------------------------
  const [selected, setSelected] = useState(null);
  // Hooks ---------------------------------
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------
  const modules = props.modules;
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i);
  }
          
      const getModuleStartDate = (module) => {
            let moduleStartDate = module.ModuleStartDate
            const c = { time: moduleStartDate };
            moduleStartDate = new Date(c.time).toLocaleDateString();
            return moduleStartDate;  
      }

      const getModuleEndDate = (module) => {
            let moduleEndDate = module.ModuleEndDate
            const v = { time: moduleEndDate };
            moduleEndDate = new Date(v.time).toLocaleDateString();
            return moduleEndDate;
      }

  return (
      <>
      <div className="wrapper">
        <div className="accordian">
          {modules.map((module, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{module.ModuleName}</h2>
                <span>{selected == i ? '-' : '+'}</span>
              </div>
              <div className={selected == i ? 'content show' : 'content'}>
                <div className='fields'>
                    <div className='label'>
                      <h2>Module Code:</h2>
                    </div>
                    <div className='value'>
                      <h2>{module.ModuleCode}</h2>
                    </div>
                </div>
                <div className='fields'>
                    <div className='label'>
                      <h2>Module Level:</h2>
                    </div>
                    <div className='value'>
                      <h2>{module.ModuleLevel}</h2>
                    </div>
                </div>
                <div className='fields'>
                    <div className='label'>
                      <h2>Module Start Date:</h2>
                    </div>
                    <div className='value'>
                      <h2>{getModuleStartDate(module)}</h2>
                    </div>
                </div>
                <div className='fields'>
                    <div className='label'>
                      <h2>Module End Date:</h2>
                    </div>
                    <div className='value'>
                      <h2>{getModuleEndDate(module)}</h2>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
  )

}

export default Accordian;