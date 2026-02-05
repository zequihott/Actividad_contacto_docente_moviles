
export const FuncionArreglo = () => {

    const arreglo: number[] = [4, 5, 8, 9, 10];
    const suma = arreglo.reduce((acc, val) => acc + val, 0);



    return (
    <div>
        <h3>Funcion Arreglo</h3>
        <p>Arreglo: {arreglo.join(', ')}</p>
        <p>Suma: {suma}</p>
    </div>
    )
}
