import React from "react";
import "./style.css";

 class App extends React.Component{
   constructor(){
     super();
     this.state={
       tasks:["Buy new phone","Learn React","Book movie tickets"]
     }
   }
   addTask = ()=>{
     var newTask = document.getElementById("d1").value;
     this.setState({tasks:[...this.state.tasks,newTask]});
   }
   deleteTask=(index)=>{
     var temp = [...this.state.tasks];
     temp.splice(index,1);
     this.setState({tasks:[...temp]});
     
   }
   render(){
     return(
       <div>
         <h1>To-Do List (strings):</h1>
         <input type ="text" id="d1"/>
         &nbsp;
         <button onClick={this.addTask}>Add Task</button>
         <hr/>
         {
           this.state.tasks.map((x,i)=>{
              return (<div> <li> {x}
                &nbsp; &nbsp;
                <button onClick={()=>{
                  this.deleteTask(i);
                }}>Delete</button>
                <hr/>
               </li>
               </div>);
           }
           )
         }
       </div>
     );
   }
 }
 export default App;
