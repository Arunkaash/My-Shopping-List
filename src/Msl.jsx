import React,{useState} from 'react';
import logo from './images/mainlogo.png';
import Button from '@mui/material/Button';
import List from './List';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';
import Footer from './Footer';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Msl(){
        const [item, setItem] = useState("");
        const [newItem, setNewItem] = useState([]);
        const addItem = (event) => {
            setItem(event.target.value);
        };
        const listOfItems = () => {
            if(item !== ""){
                setNewItem((prevValue) => {
                return [...prevValue, item]
            });
            }
            else(
                alert("Please, Add an Item")
            )
            setItem("")
        };
        const clearAll = () =>{
          setNewItem([])
        }
    return(

        
        <>
        <div className="main_div">
            <div className="header">
            <img src={logo} alt="Logo"></img>
            
            </div>
            <div className="inner_div">
            <h1>My Shopping List</h1>
            <div className="inner_div1">
                <input type="text" placeholder="Add an Items" value={item} onChange={addItem} />
                <Button  color="primary" onClick={listOfItems}><AddCircleIcon/></Button>
            </div>
            <div className="list">
                { newItem.map((val, index)=>{
                    return <List key={index} text={val}/>;
                })}
            </div>
            <div className="clear_all">
                <Tooltip title="Clear All">
                <Button  onClick={clearAll} color="primary" ><DeleteForeverIcon/></Button>
                </Tooltip>
            </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}
export default Msl;