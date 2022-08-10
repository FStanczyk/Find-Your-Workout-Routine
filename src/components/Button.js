import { Link } from "react-router-dom";
export default function Button(props){ //props: onClick, text

    return(
        <Link to={props.target} style={{display: 'contents'}}>
        <div className = {props.buttonType} onClick={props.onClick}>
            {props.text}
        </div>
        </Link>
        
    )
}
