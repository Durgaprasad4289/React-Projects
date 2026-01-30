import { useState,useEffect } from "react";
export default function PassToggle(){
    let [display,Setdisplay]=useState(true)
    let [show,Setshow]=useState("😎");
    const click=()=>{
      Setshow(display? "🫣" : "😎");
      Setdisplay(!display)
    }

    useEffect(()=>{
      
    },[show])
    return(
      <>
        <div className="box">
          <input type={display ? "password": "text"} placeholder="Password" />
          <p onClick={click}>{show}</p>
        </div>
      </>
    )
}