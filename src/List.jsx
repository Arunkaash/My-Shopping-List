import React,{useState} from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function List(props){
const [line, setLine] = useState(false);
const cutIt = () => {
    setLine(true);
}
    return(
        <>
        <div className="list_icon">
        <span onClick={cutIt}>
            <CheckCircleIcon className="completebtn"/>
        </span>
        <li style={{textDecoration:line? "line-through":"none",
            color: line ? "green" : "black"}}>{props.text}</li>
        </div>

        </>
    )
}

export default List;