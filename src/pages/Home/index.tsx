import { PlanningCardComponent } from "../../components/PlanningCard";
import { BalanceCardComponent } from "../../components/BalanceCard";
import { CategoryExpensesCardComponent } from "../../components/CategoryExpensesCard";
import { SavingsCardComponent } from "../../components/SavingsCard";
import './style.css';


const HomeComponent = () => {

    return (
        <>

            <div className="home-container">
                <div className="left-panel panel-space-between">
                    <div className="subpanel-50">
                        <CategoryExpensesCardComponent />
                    </div>
                    <div className="subpanel-50">
                        <PlanningCardComponent />
                    </div>
                </div>

                <div className="right-panel panel-space-between">
                    <div className="subpanel-50">
                        <SavingsCardComponent />
                    </div>
                    <div className="subpanel-50">
                        <BalanceCardComponent />
                    </div>
                </div>
            </div>

        </>
    )
}

export { HomeComponent };
