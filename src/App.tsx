import { Funcion } from "./typescript/Funcion1";

import { ValoresDivididos } from "./typescript/ValoresDivididos";

import { FuncionArreglo } from "./typescript/FuncionArreglo";

import { Contador } from "./typescript/Contador";

import { Calificaciones } from "./typescript/Calificaciones";

const App = () => {
    return (
    <div className="mt-2">
        <h1>Actividad Contacto Docente</h1>
        <hr />
        <Funcion/> 
        <hr />
        <FuncionArreglo/>
        <hr />
        <ValoresDivididos/>
        <hr />
        <Calificaciones/>
        <hr />
        <Contador/>
        <hr />
    </div>
    )
}

export default App;