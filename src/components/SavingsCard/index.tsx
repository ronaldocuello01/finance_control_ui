import { useEffect, useState } from "react";

import './style.css';
import { SAVINGS_TITLE } from "../../config/constants";
import { SAVINGS_INFO } from "../../config/fakeData";

import { currencyFormat, getTotal } from "../../assets/utils/functions";

const SavingsCardComponent = () => {

    const [totalSavings, setTotalSavings] = useState(0);
    const [savingsPockets, setSavingsPockets] = useState<any[]>([]);

    useEffect(() => {
        setSavingsPockets(SAVINGS_INFO);
        setTotalSavings(getTotal(savingsPockets, 'amount'));
    });

    return (
        <>
            <div>
                <div className="card-header">
                    <p className="card-header-text savings-title">{SAVINGS_TITLE}</p>
                    <p className="card-header-text savings-amount">total: $ {currencyFormat(totalSavings)}</p>
                </div>

                <div className="card-information savings-information">
                    <div className="savings-pockets-list-container">
                        {
                            savingsPockets.map((savingsPocket) => (
                                <div className="savings-pocket" key={savingsPocket.id}>
                                    <p className="savings-pocket-text savings-pocket-name">{savingsPocket.name}</p>
                                    <p className="savings-pocket-text savings-pocket-amount">$ {currencyFormat(savingsPocket.amount)}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export { SavingsCardComponent };
