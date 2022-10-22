

function HeaderDos(){
    const miNombre = "Pedro Perez";
    
    const equipos = ["Nacional","Millonarios","Santafe","Cali"];

    return(
        <div>
            <span>Bienvenidos a react { miNombre }</span>
            <span> Mintic 2022</span>
            {
                equipos.map((dato,key) => {
                    return <h6>{key} - {dato}</h6>
                })
            }
        </div>
    )
}

export default HeaderDos;