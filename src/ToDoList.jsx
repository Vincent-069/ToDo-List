import React,{useState} from 'react'

function ToDoList(){

    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    function inputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
       setTasks(t => [...t,newTask]);
       setNewTask("");
        }
    }
    function deleteTask(index){
        const updated=tasks.filter((_,i) => i!==index);
        setTasks(updated);
    }
    function upTask(index){
        if(index>0){
            const updated=[...tasks];
            [updated[index],updated[index-1]]=[updated[index-1],updated[index]];
            setTasks(updated);
        }
    }
    function downTask(index){
        if(index<tasks.length-1){
            const updated=[...tasks];
            [updated[index],updated[index+1]]=[updated[index+1],updated[index]];
            setTasks(updated);
        }
    }
    return(
        <div className='doList'>
            <p>TO-DO-LIST</p>
            <input type="text"
            placeholder='Enter a Task...' 
            value={newTask}
            onChange={inputChange}/>

            <button className='add-btn' onClick={addTask}>Add</button>
            
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => upTask(index)}>⤴️</button>
                        <button className="move-btn" onClick={() => downTask(index)}>⤵️</button>
                    </li>
                )}
            </ol>

        </div>
    )
}

export default ToDoList