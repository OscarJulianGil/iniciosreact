import './Control.css'
import { useState } from 'react';

export const Control = () =>{

    const[nombres,setNombres] = useState("");

    const handleInput = (event) =>{
        setNombres(event.target.value);
    }

    return(
        <div>
            <input onChange={handleInput} type="text"></input>
            <h6>{nombres}</h6>
        </div>
    )
}