export const currencyFormat = (value: number) => {
    return value.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'COP'
    }).split(',')[0];
}

export const getTotal = (object: any, property: string) => {
    return object.reduce((total: number, objeto: any) => total + objeto[property], 0);
}

export const getValueByString = (obj: any, path: string): any => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};