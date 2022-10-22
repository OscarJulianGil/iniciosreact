import './Contador.css';
import { useState } from 'react';


function Contador(){


    const [contador, setContador] = useState(0);    

    const aumentarContador = () =>{
        setContador(contador + 1);
    }

    const disminuirContador = () =>{
        setContador(contador - 1);
    }

    return(
        <div>
            <h4 className='colorText'>{contador}</h4>
            <button onClick={aumentarContador}>Incrementar</button>
            <button onClick={disminuirContador}>Disminuir</button>
        </div>
    )
}
export default Contador;