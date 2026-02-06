
interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}

export const Calificaciones = () => {

    const alumnos: Alumno[] = [
        {
        nombre: "Viviana",
        edad: 19,
        calificacion: 10,
    },
    {
        nombre: "Wendy",
        edad: 20,
        calificacion: 8,
    },
    {
        nombre: "Gerson",
        edad: 18,
        calificacion: 9,
    }
];

    const calcularPromedio = (alumno: Alumno[]): number => {
        return(
            alumno[0].calificacion + alumno[1].calificacion + alumno[2].calificacion
        ) / 3;
    }


    return (
    <div>
        <h3>Calificaciones</h3>
        <span>Promedio: {calcularPromedio(alumnos)}</span>
    </div>
    )
}
