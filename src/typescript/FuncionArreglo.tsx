
export const FuncionArreglo = () => {

    const numero: number[] = [4, 5, 8, 9, 10];
    
    const sumar = (numero: number[]): number => {
        return numero[0] + numero[1] + numero[2] + numero[3] + numero[4];
    }


    return (
    <div>
        <h3>Funcion Arreglo</h3>
        <span>La suma de los elementos es: {sumar (numero)}</span>
    </div>
    )
}
