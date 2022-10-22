import './CambioEstilo.css';
import { useState } from 'react';

export const CambioEstilo = () =>{

    const[colorseleccionado,setColorSeleccionado] = useState("")
    const [textColor,setColor] = useState("aqua");

    const cambioElColor = (event) =>{
        //El color llega en formato hexadecimal
        console.log(event.target.value);
        setColor(event.target.value);
    }

    return(
        <div>
            <span style={{ color:textColor }}>Cambio de estilo</span>
            <h6 className='cambioColor'>Otro texto</h6>
            <input type="color" onChange={cambioElColor} ></input>
        </div>
    )
}