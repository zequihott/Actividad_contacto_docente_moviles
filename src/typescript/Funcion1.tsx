//
export const Funcion = () => {
    //Funciones return
    const multiplicar = (lado: number): number => {
        //para calcular el area de un cuadrado es L * L
        return lado * lado;
    }


    return (
    <div>
        <h3>Funcion</h3>
        <span>El area de un cuadrado es: {multiplicar(5)}</span>
    </div>
    )
}