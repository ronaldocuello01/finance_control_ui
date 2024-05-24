import { useEffect, useState } from "react";
// import './style.css';
import { GLOBAL_MOVEMENTS } from "../../config/fakeData";

import { GeneralTableComponent } from "../GeneralTable";
import { GLOBAL_MOVEMENTS_COLUMNS } from "../../config/constants";
import { MovementsInterface } from "../../interfaces/movementInterface";


const MovementsCardComponent = () => {

    const [movements, setMovements] = useState<MovementsInterface>();

    useEffect(() => {
        setMovements(GLOBAL_MOVEMENTS);
        // console.log(GLOBAL_MOVEMENTS.movements[0].category.name);
    }, []);

    return (
        <>
            <div>

                <div className="card-header">
                    <p className="card-header-text">titulo</p>
                </div>

                <div className="card-information">
                    <GeneralTableComponent 
                        columns={GLOBAL_MOVEMENTS_COLUMNS}
                        data={ movements? movements.movements: [] } 
                        page={ movements? movements.movementsPage : 0 } 
                    />
                </div>

            </div>
        </>
    )
}

export { MovementsCardComponent };
