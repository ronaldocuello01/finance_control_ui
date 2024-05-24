interface Category {
    id: number;
    name: string;
    color: string;
}

interface PaymentMethod {
    id: number;
    name: string;
    color: string;
}

interface MovementType {
    id: number;
    name: string;
    color: string;
}

interface Movement {
    id: number;
    date: string;
    concept: string;
    description: string;
    amount: number;
    category: Category;
    paymentMethod: PaymentMethod;
    movementType: MovementType;
}

export interface MovementsInterface {
    movementsPage: number;
    movements: Movement[];
}