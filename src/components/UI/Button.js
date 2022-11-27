import './Button.css';

export function Button(props) {


  return (
          <button className = {props.className} onClick={props.onClick}> 
            <img src = {props.img} alt = {props.alt}/> {props.title}
          </button>
  )
  }
  
  export default Button;