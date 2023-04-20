import { useState } from "react";
import { useRef } from "react";
import './App';
const Useref=()=>
{
    const inputRef = useRef();
    const inputAgeRef = useRef();
    const inputGenderRef = useRef();
    const[updated,setUpdated]=useState();
    const[age,setAge]=useState();
    const[geder,setGender]=useState();

    
    function submit()
    {
      const update=inputRef.current['names'].value;
       setUpdated(update);
       const age=inputRef.current['ages'].value;
       setAge(age);
       const gender=inputRef.current['gender'].value;
       setGender(gender);
    }
   
    return(
        <div>
            <form ref={inputRef} >
           Name: <input  type="text" name="names" /><br/>
          Age:<input  type="text" name="ages"/><br />
          Gender:<input type="text" name="gender"/><br /></form>
         <button onClick={submit}>submit</button>
        
          <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                     <td>Gender</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{updated}
                    </td>
                    <td>{age}</td>
                    <td>{geder}</td>
                </tr>
            </tbody>
          </table>
       </div>
        
    )
}
export default Useref;