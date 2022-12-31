import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./TaskSlice";
const AddTask =()=> {

   const [NewTask,setNewTask]=useState('');
   const dispatch=useDispatch();
   const assigntotask=(e)=>{
    setNewTask(e.target.value);
    console.log(NewTask)
   }
   const AddtoTask=()=>{
      dispatch(addTask(NewTask));
   }
    return(
        <div className="input-group mb-3">
           <input type="text" className="form-control"
                  value={NewTask}
                  onChange={assigntotask}
                  placeholder="Enter Task"/>
           <button className="btn btn-outline-secondary" 
                   type="button"
                   onClick={AddtoTask}>Button</button>
        </div>
    )
   
} 

export default AddTask;