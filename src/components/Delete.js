import React,{Component} from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DeleteBtn =(props)=>{
       
    function delTask(){
        props.delTask()
    }
        return(
            <button type="button"
                    className="btn btn-outline-info"
                    onClick={delTask}>
                   <DeleteOutlineIcon/>
            </button>
        )
    
}

export default DeleteBtn;