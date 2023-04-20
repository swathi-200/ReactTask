
import React, { useState } from "react";
import ThemeContext from "./Context";
import NavBar from "./navbar";
import './App.css';
const themes={
 dark:{
    backgroundcolor:'black',
    color:'white',
 },
light:{
    backgroundcolor:'white',
    color:'black',
},
};
export const App=()=>{
    const[isDark,setIsDark]=useState(false);
    const theme=isDark ? themes.dark:themes.light;
  
    const ToggleTeme=()=>{
        setIsDark(!isDark);
    }
return(
    <ThemeContext.Provider value={[{theme,isDark},ToggleTeme]}>
        <NavBar />
    </ThemeContext.Provider>
);
}
export default App;