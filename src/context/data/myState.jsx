import React from "react";
import MyContext from "./myContext";

function MyState(props) {
    const state = {
        name: "Grace Unstoppable",
        role: "Software Engineer"
    }
    return (
       <MyContext.Provider value={state}>
        {props.children}
       </MyContext.Provider>
    )
    
}

export default MyState;