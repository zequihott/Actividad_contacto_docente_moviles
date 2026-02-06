
import { useState } from "react";

export const Contador = () => {
    //hooks useState: permite cambiar el estado (valor) de variables, arreglos, objetos, componentes, etc
    const [contador,setContador] = useState<number>(0);

    //Funcion que va a trabajar con el set contador para actualizar el estado del contador
    const cambiarContador = (numero: number): void => {
        //llamar la funcion conrador para modificar el estado del contador
        setContador(contador + numero);
        //setContador(5)
    }

    return (
        <div>
            <h3>Contador: <small>{contador}</small></h3>
            <button className="btn btn-primary"
            onClick={() =>cambiarContador(5)}>
            +5
            </button>
            &nbsp;
            <button className="btn btn-primary"
            onClick={() =>cambiarContador(-5)}>
            -5
            </button>
        </div>
    )
}
