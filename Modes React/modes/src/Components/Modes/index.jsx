import { useEffect, useState } from 'react'
import './style.css'
const Modes = () => {
    const[modes, setModes] =useState("");

const modesChanger =()=>{
    if(modes=== "light"){
        document.body.classList.add("light")
        document.body.classList.remove("dark")

    }else if(modes==="dark"){
        document.body.classList.add("dark")
        document.body.classList.remove("light")

    }
}

    useEffect(() =>{
        const currentMode = localStorage.getItem("modes") || "light";
        setModes(currentMode);
        modesChanger();
    },[]);

    useEffect(() =>{
        modesChanger();
    },[modes]); 

    const changeMode =()=>{
        if(modes === "light"){
            setModes("dark")
        }else if(modes ==="dark"){
            setModes("light")
        }
        localStorage.getItem("modes", modes)
    }
  return (
    <div>
      <button onClick={changeMode}>
        { modes === "light" ? "moon" : "sun"}
      </button>
    </div>
  )
}

export default Modes
