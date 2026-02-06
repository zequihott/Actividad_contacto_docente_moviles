
export const ValoresDivididos = () => {

    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const dividir = (arreglo: number[]): number[] => {
        return arreglo.map(num => num / 5);
    }

    return (
    <div>
        <h3>Valores Divididos</h3>
        {JSON.stringify(dividir(arreglo))}
    </div>
    )
}
