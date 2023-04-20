import React, { useState } from "react";
import { Countcontext } from "./context";
import { CompB } from "./CompB";
const ComPA=()=>{
   const[count,setCount]=useState(0);
   const Counter=()=>{
    setCount(count+1);
   
   }
    return(
        <div>
           <h1>CompA</h1>
        <Countcontext.Provider value={{ count, Counter }}>
            <CompB />
        </Countcontext.Provider>
        </div>
    );  
}
export default ComPA;