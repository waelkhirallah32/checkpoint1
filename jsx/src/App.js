import React from 'react';
import name from './name';
import './App.css';

function App() {
  return (
    <div className="App">
     <form className="part" >
       <label >Name</label> 
       <input type="text"/>
       
       <label>Age</label>
       <input type="number"/>
      
       <label >Password</label>
       <input type="password"/>
       
       <label >Adress :</label>  
       <input type="text"/>
         
       </form> 
       
    </div>
  );
}

export default App;
