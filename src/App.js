import AddTask from './components/AddTask';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App container">
      <h4 className='my-5'>Todo List App(CRUD using RTK)</h4>
      <div className="row my-3">
         <div className="col">
     
         </div>
         <div className="col-6 ">
               <AddTask/>
               <Todolist/>
         </div>
         <div className="col">
     
          </div>
      </div>
     
    </div>
  );
}

export default App;
