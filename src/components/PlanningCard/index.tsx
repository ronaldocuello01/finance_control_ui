import { useEffect, useState } from "react";
import './style.css';
import { PLANNING_TITLE } from "../../config/constants";
import { MONTLY_OBLIGATIONS } from "../../config/fakeData";
import { currencyFormat } from "../../assets/utils/functions";


const PlanningCardComponent = () => {

    const [monthPlan, setMonthPlan] = useState<any[]>([]);
    const [currentMonth, setCurrentMonth] = useState('');
    const [currentYear, setCurrentYear] = useState(0);

    useEffect(() => {
        setMonthPlan(MONTLY_OBLIGATIONS.planning);
        setCurrentMonth(MONTLY_OBLIGATIONS.planningMonth);
        setCurrentYear(MONTLY_OBLIGATIONS.planningYear);
    });


    return (
        <>
            <div>
                <div className="card-header">
                    <p className="card-header-text planning-title">{ PLANNING_TITLE }: { currentMonth } { currentYear }</p>
                    {/* COMPONENTE DE CALENDARIO */}
                </div>

                <div className="card-information planning-information">
                    {
                        monthPlan.map((plan) => (
                            <div className="plan-information" key={ plan.id }>
                                <p className="card-info-text plan-name">
                                    {plan.name.toLowerCase()}
                                </p>
                                <p className="card-info-text plan-amount">$ { currencyFormat(plan.value) }</p>
                                <p className="card-info-text plan-amount">$ { currencyFormat(plan.paid) }</p>
                                <p className="card-info-text plan-amount">{ plan.percentagePaid } %</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export { PlanningCardComponent };
