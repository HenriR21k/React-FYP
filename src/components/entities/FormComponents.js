import './FormComponents.css';

export function Form(props) {

  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
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
    onChange={props.onChange} placeholder={props.placeholder}/> <br />
    {
      props.error &&
        <p>Error message: {props.error}</p>

    }
  </>
  )
}
