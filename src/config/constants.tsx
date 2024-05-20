
export const HEADER_POSITION_RIGHT = 'right';
export const HEADER_POSITION_LEFT = 'left';

export const ROUTES = [
    {
        key: 'dashboard',
        to: '/',
        name: 'dashboard',
        needAuthentication: true,
        headerPosition: HEADER_POSITION_LEFT
    },
    {
        key: 'data',
        to: '/data',
        name: 'data',
        needAuthentication: true,
        headerPosition: HEADER_POSITION_LEFT
    },
    {
        key: 'planning',
        to: '/planning',
        name: 'planning',
        needAuthentication: true,
        headerPosition: HEADER_POSITION_LEFT
    },
    {
        key: 'wishlist',
        to: '/wishlist',
        name: 'wishlist',
        needAuthentication: true,
        headerPosition: HEADER_POSITION_LEFT
    },
    {
        key: 'dues',
        to: '/dues',
        name: 'dues',
        needAuthentication: true,
        headerPosition: HEADER_POSITION_LEFT
    },
    {
        key: 'savings',
        to: '/savings',
        name: 'savings',
        needAuthentication: true,
        headerPosition: HEADER_POSITION_LEFT
    },
    {
        key: 'settings',
        to: '/settings',
        name: 'settings',
        needAuthentication: true,
        headerPosition: HEADER_POSITION_RIGHT
    },
    {
        key: 'login',
        to: '/login',
        name: 'login',
        needAuthentication: false,
        headerPosition: HEADER_POSITION_RIGHT
    }
]

export const TOTAL_EXPENSES_TITLE = 'Gastos por categoria';
export const PLANNING_TITLE = 'Planning';
export const BALANCE_TITLE = 'Balance';

export const BALANCE_EARNINGS_TITLE = 'Earnings';
export const BALANCE_EXPENSES_TITLE = 'Expense';



export const SAVINGS_TITLE = 'Ahorros';