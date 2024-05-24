import { MovementsCardComponent } from '../../components/MovementsCard';
import './style.css';

const DataComponent = () => {
    return (
        <>
            <div className="data-container">
                <div className="main-panel">
                    <div className="subpanel-100">
                        <MovementsCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export { DataComponent }
