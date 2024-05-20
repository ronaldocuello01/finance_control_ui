


// /api/categories_expenses/{user_id}
export const CATEGORY_EXPENSES: any = [
    { id: 1, categoryColor: '#D2BFF0', name: 'CELULAR', totalExpense: 38000 },
    { id: 2, categoryColor: '#F0C1C1', name: 'DEUDAS', totalExpense: 150000 },
    { id: 3, categoryColor: '#C2F0D7', name: 'PRESTAMOS', totalExpense: 0 },
    { id: 4, categoryColor: '#C2C8EF', name: 'HANG OUT', totalExpense: 200000 },
    { id: 5, categoryColor: '#C2E4F0', name: 'ENTRETENIMIENTO', totalExpense: 60000 },
    { id: 6, categoryColor: '#F3D8C8', name: 'CUIDADO PERSONAL', totalExpense: 30000 },
    { id: 7, categoryColor: '#F2C7CD', name: 'MERCADO', totalExpense: 80000 },
    { id: 8, categoryColor: '#F2C7EA', name: 'SALUD', totalExpense: 0 },
    { id: 9, categoryColor: '#F2C7EA', name: 'TRAMITES', totalExpense: 0 },
    { id: 10, categoryColor: '#B1F0A7', name: 'REGALOS', totalExpense: 20000 },
    { id: 11, categoryColor: '#EFEFCD', name: 'SERVICIOS', totalExpense: 35000 },
    { id: 12, categoryColor: '#D2BFF0', name: 'GASOLINA', totalExpense: 70000 },
    { id: 13, categoryColor: '#D2BFF0', name: 'MANTENIMIENTO', totalExpense: 70000 },
    { id: 14, categoryColor: '#F0C1C1', name: 'AHORROS', totalExpense: 400000 },
    { id: 15, categoryColor: '#C2C8EF', name: 'EFECTIVO', totalExpense: 30000 },
    { id: 16, categoryColor: '#C2E4F0', name: 'ROPA', totalExpense: 43000 },
    { id: 17, categoryColor: '#F0C1C1', name: 'CONSTRUCCION', totalExpense: 76000 },
    { id: 18, categoryColor: '#C2E4F0', name: 'TECNOLOGIA', totalExpense: 0 },
    { id: 19, categoryColor: '#C2C8EF', name: 'DESCONOCIDO', totalExpense: 10000 },
    { id: 20, categoryColor: '#D2BFF0', name: 'EMERGENCIA', totalExpense: 0 },
];


// /api/obligations/{user_id}/{year}/{month}
export const MONTLY_OBLIGATIONS: any = {
    planningMonth: 'Marzo',
    planningYear: 2024,
    planning: [
        { id: 1, name: 'arriendo', value: 10000, paid: 10000, percentagePaid: 30.0, category: 'servicios', status: 'P' },
        { id: 2, name: 'internet', value: 20000, paid: 10000, percentagePaid: 30.0, category: 'servicios', status: 'A' },
        { id: 3, name: 'gasolina', value: 30000, paid: 10000, percentagePaid: 30.0, category: 'gasolina', status: 'A' },
        { id: 4, name: 'energia', value: 30000, paid: 10000, percentagePaid: 30.0, category: 'servicios', status: 'P' },
        { id: 5, name: 'ahorro', value: 30000, paid: 10000, percentagePaid: 30.0, category: 'ahorros', status: 'A' }
    ]
}

// /api/earnings/{user_id}/{year}/{month}
export const EARNINGS = [
    { id: 1, name: "SALARIO", value: 4000000 },
    { id: 2, name: "NEGOCIO 1", value: 500000 },
    { id: 3, name: "NEGOCIO 2", value: 500000 }
];


// /api/expenses/{user_id}/{year}/{month}
export const EXPENSES = [
    { id: 1, name: "COMPRA", value: 78000 },
    { id: 2, name: "AHORRO", value: 500000 },
    { id: 3, name: "GASOLINA", value: 50000 }
];


// /api/movements/monthly/{user_id}/{year}/{month}
export const MONTHLY_MOVEMENTS = {
    movementsMonth: 'Marzo',
    movementsYear: 2024,
    earnings: [
        { id: 1, name: "SALARIO", value: 4000000 },
        { id: 2, name: "NEGOCIO 1", value: 500000 },
        { id: 3, name: "NEGOCIO 2", value: 500000 }
    ],
    expenses: [
        { id: 1, name: "COMPRA", value: 78000 },
        { id: 2, name: "AHORRO", value: 500000 },
        { id: 3, name: "GASOLINA", value: 50000 }
    ],
    expensesPercentage: 49
}


// /api/savings/{user_id}
export const SAVINGS_INFO = [
    { id: 1, name: 'personal', amount: 50000 },
    { id: 2, name: 'grupal', amount: 80000 },
    { id: 3, name: 'casa', amount: 30000 },
    { id: 4, name: 'taxi', amount: 140000 },
]



// /api/movements/global/{user_id}/{page_id}
export const GLOBAL_MOVEMENTS = {
    movementsPage: 0,
    movements: [
        {
            id: 1,
            date: "24/05/23",
            concept: "Compra de supermercado",
            description: "aaa",
            amount: 150.75,
            category: {
                id: 1,
                name: "Alimentos",
                color: "#FF6347"
            },
            paymentMethod: {
                id: 1,
                name: "Tarjeta de crédito",
                color: "#1E90FF"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 2,
            date: "25/05/23",
            concept: "Pago de servicios",
            description: "aaa",
            amount: 75.00,
            category: {
                id: 2,
                name: "Servicios",
                color: "#FFD700"
            },
            paymentMethod: {
                id: 2,
                name: "Débito automático",
                color: "#32CD32"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 3,
            date: "26/05/23",
            concept: "Cena en restaurante",
            description: "aaa",
            amount: 60.50,
            category: {
                id: 3,
                name: "Entretenimiento",
                color: "#FF4500"
            },
            paymentMethod: {
                id: 3,
                name: "Efectivo",
                color: "#8B4513"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 4,
            date: "27/05/23",
            concept: "Gasolina",
            description: "aaa",
            amount: 45.00,
            category: {
                id: 4,
                name: "Transporte",
                color: "#4682B4"
            },
            paymentMethod: {
                id: 4,
                name: "Tarjeta de débito",
                color: "#20B2AA"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 5,
            date: "28/05/23",
            concept: "Ropa nueva",
            description: "aaa",
            amount: 120.00,
            category: {
                id: 5,
                name: "Vestimenta",
                color: "#FF69B4"
            },
            paymentMethod: {
                id: 1,
                name: "Tarjeta de crédito",
                color: "#1E90FF"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 6,
            date: "29/05/23",
            concept: "Suscripción de streaming",
            description: "aaa",
            amount: 15.99,
            category: {
                id: 3,
                name: "Entretenimiento",
                color: "#FF4500"
            },
            paymentMethod: {
                id: 2,
                name: "Débito automático",
                color: "#32CD32"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 7,
            date: "30/05/23",
            concept: "Compra de libros",
            description: "aaa",
            amount: 35.00,
            category: {
                id: 6,
                name: "Educación",
                color: "#8A2BE2"
            },
            paymentMethod: {
                id: 3,
                name: "Efectivo",
                color: "#8B4513"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 8,
            date: "31/05/23",
            concept: "Mantenimiento del coche",
            description: "aaa",
            amount: 200.00,
            category: {
                id: 4,
                name: "Transporte",
                color: "#4682B4"
            },
            paymentMethod: {
                id: 4,
                name: "Tarjeta de débito",
                color: "#20B2AA"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 9,
            date: "01/06/23",
            concept: "Compra de medicamentos",
            description: "aaa",
            amount: 40.00,
            category: {
                id: 7,
                name: "Salud",
                color: "#FF1493"
            },
            paymentMethod: {
                id: 1,
                name: "Tarjeta de crédito",
                color: "#1E90FF"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        },
        {
            id: 10,
            date: "02/06/23",
            concept: "Pago de gimnasio",
            description: "aaa",
            amount: 50.00,
            category: {
                id: 8,
                name: "Fitness",
                color: "#FF4500"
            },
            paymentMethod: {
                id: 2,
                name: "Débito automático",
                color: "#32CD32"
            },
            movementType: {
                id: 1,
                name: "Expend",
                color: "#FF0000"
            }
        }
    ]
};