import React from "react";
import { Countcontext } from "./context";

export const CompB = () => {

    const countContext = React.useContext(Countcontext);

    return <div>
        <h1>CompB</h1>
        <p>Count: {countContext.count}</p>
        <button onClick={countContext.counter}>click</button>
        
    </div>
}