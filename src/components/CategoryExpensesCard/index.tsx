import { useEffect, useState } from "react";
import './style.css';
import { TOTAL_EXPENSES_TITLE } from "../../config/constants";
import { CATEGORY_EXPENSES } from "../../config/fakeData";
import { currencyFormat, getTotal } from "../../assets/utils/functions";

const CategoryExpensesCardComponent = () => {

    const [categories, setCategories] = useState<any[]>([]);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        setCategories(CATEGORY_EXPENSES);
        setTotalExpenses(getTotal(categories, 'totalExpense'));
    });

    return (
        <>
            <div>
                <div className="card-header">
                    <p className="card-header-text total-expenses-title">{ TOTAL_EXPENSES_TITLE }</p>
                    <p className="card-header-text total-expenses-amount">total: $ { currencyFormat(totalExpenses) }</p>
                </div>

                <div className="card-information expenses-information">
                    {
                        categories.map((category) => (
                            <div className="expense-information" key={ category.id }>
                                <p className="card-info-text expense-name">
                                    <span className="aligned-div circle-7px" style={{ backgroundColor: category.categoryColor }}>
                                    </span> {category.name.toLowerCase()}
                                </p>
                                <p className="card-info-text expense-amount">$ { currencyFormat(category.totalExpense) }</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export { CategoryExpensesCardComponent };
