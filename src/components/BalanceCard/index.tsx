import { useEffect, useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import './style.css';
import { BALANCE_EXPENSES_TITLE, BALANCE_EARNINGS_TITLE, BALANCE_TITLE } from "../../config/constants";
import { MONTHLY_MOVEMENTS } from "../../config/fakeData";
import { currencyFormat, getTotal } from "../../assets/utils/functions";

const BalanceCardComponent = () => {

    const [earnings, setEarnings] = useState<any[]>([]);
    const [expenses, setExpenses] = useState<any[]>([]);
    const [expensesPercentage, setExpensesPercentage] = useState(0);
    const [balancePercentage, setBalancePercentage] = useState(0);

    const [showValues, setShowValues] = useState(false);

    const [totalEarnings, setTotalEarnings] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);

    const [currentMonth, setCurrentMonth] = useState('');
    const [currentYear, setCurrentYear] = useState(0);


    useEffect(() => {
        setEarnings(MONTHLY_MOVEMENTS.earnings);
        setExpenses(MONTHLY_MOVEMENTS.expenses);

        setTotalEarnings(getTotal(earnings, 'value'));
        setTotalExpenses(getTotal(expenses, 'value'));
        setTotalBalance(totalEarnings - totalExpenses);

        setCurrentMonth(MONTHLY_MOVEMENTS.movementsMonth);
        setCurrentYear(MONTHLY_MOVEMENTS.movementsYear);
        setExpensesPercentage(MONTHLY_MOVEMENTS.expensesPercentage);
        setBalancePercentage(100 - expensesPercentage)
    });

    return (
        <>
            <div>
                <div className="card-header">
                    <p className="card-header-text balance-title">{ BALANCE_TITLE }: { currentMonth } { currentYear }</p>
                    <p className="card-header-text show-values-icon" onClick={ () => { setShowValues(!showValues); } }> 
                        { showValues? <FaRegEyeSlash /> : <FaRegEye /> } 
                    </p>
                </div>

                <div className="card-information balance-information">
                    
                    <div className="balance-bar-container">
                        <div className="balance-bar earnings-bar">
                            <p className="bar-text">{ showValues? `$ ${currencyFormat(totalEarnings)}`: BALANCE_EARNINGS_TITLE }</p>
                        </div>
                    </div>
                    <div className="balance-bar-container">
                        <div className="balance-bar expenses-bar" style={ { width: `${expensesPercentage}%` } }>
                            <p className="bar-text">{ showValues? `$ ${currencyFormat(totalExpenses)}`: `${BALANCE_EXPENSES_TITLE} (${expensesPercentage} %)` }</p>
                        </div>
                        <div className="balance-bar current-balance-bar" style={ { width: `${balancePercentage}%` } }>
                            <p className="bar-text">{ showValues? `$ ${currencyFormat(totalBalance)}`: `${BALANCE_TITLE} (${balancePercentage} %)` }</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export { BalanceCardComponent };
