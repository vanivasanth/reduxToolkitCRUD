import {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import data from "../assets/data.json";
import { readTask } from "./TaskSlice";
import { deleteTask } from "./TaskSlice";
import { editTask } from "./TaskSlice";
import EditBtn from "./Edit";
import DeleteBtn from "./Delete";

const Todolist=() =>
{
   const dispatch = useDispatch();   
   
   useEffect(()=>{
     dispatch( readTask(data))
   },[])

   const listOfTasks = useSelector(store => store.tasks);
   console.log(listOfTasks);
   const deletetask=(index)=>{
   dispatch(deleteTask(index))
   }
   return(
     <>
       {listOfTasks.length!==0?
         <div className="card">
         <div className="card-body">
         <table className="table">
         <thead>
           <tr>
             <th scope="col">No</th>
             <th scope="col">Tasks</th>
             <th scope="col">Edit</th>
             <th scope="col">Delete</th>
           </tr>
         </thead>
         <tbody>
             {listOfTasks.map((value,index) => {
               let i=index+1;
              return(<tr key={index}><th scope="row">{i}</th>
                         <td>{value[index]}</td>
                         <td><EditBtn /></td>
                         <td><DeleteBtn delTask={deletetask(index)}/></td>
                         </tr>)
             })}
         </tbody>
       </table>
       </div>
       </div>
       : <div>No tasks in list</div>}
     </>
    )
}
export default Todolist;
