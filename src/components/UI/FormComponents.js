import './FormComponents.css';



//Try to merge form, formcard, and fields
//FormCard -> Form -> FormFields
export function Form(props) {

  return (
    <div className='FormBody'>
      <label htmlFor={props.name}> {props.label} </label> <br/>
      <form>
      {props.children}
      </form>
    </div>
  )
}

export function FormCard(props) {

  return (
    <div className='FormCard'>
      {props.children}
    </div>
  )
}

export function FormFields(props) {


  return (
    <div className='FormFields'>
      {props.children}
      
    </div>
  )
}

export function Field(props) {

  return (
    <div className='Field'>
      {props.children}
    </div>
  )
}

export function FormInput(props) {

  return (
  <>
    <label htmlFor={props.name}> {props.label} </label> <br/>
    <input type={props.type} id={props.name} name={props.name} defaultValue={props.defaultValue} 
    onChange={props.onChange} placeholder={props.placeholder}/> <br />
    {
      props.error &&
        <p>Error message: {props.error}</p>

    }
  </>
  )
}

export function FormSelect(props) {

  return (
  <>
    <label htmlFor={props.name}>{props.label}</label> <br/>
      <select name={props.name} id={props.id} defaultValue={props.defaultValue} onChange={props.onChange}>
      {props.children}
    </select> <br/>
  </>
  )
}

export function FormTextArea(props) {

  return (
  <>
    <label htmlFor={props.name}> {props.label} </label> <br/>
    <textarea type={props.type} id={props.name} name={props.name} defaultValue={props.defaultValue} 
    onChange={props.onChange} placeholder={props.placeholder} value={props.value}/> <br />
    {
      props.error &&
        <p>Error message: {props.error}</p>

    }
  </>
  )
}
