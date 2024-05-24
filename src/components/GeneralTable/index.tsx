import { Key, useEffect, useState } from "react";
import { getValueByString } from "../../assets/utils/functions";
import { GeneralTableDataInterface } from "../../interfaces/generalTableInterface";
import './style.css';

const GeneralTableComponent = ({ columns, data, page }: GeneralTableDataInterface) => {

    const [prevData, setPrevData] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setPrevData([ ...prevData, ...data ]);
        setCurrentPage(page);
    }, [data]);

    return (
        <>
            <table className='general-table'>
                <thead>
                    <tr>
                        {
                            columns.map( (column) => (
                                <th key={column[0]}>{ column[0] }</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        // add pagination (save previews data)
                        prevData.map( (item: { id: Key | null | undefined; }) => (
                            <tr key={item.id}>
                                {
                                    columns.map( (column) => (
                                        <td key={ column[1] }>{ getValueByString(item, column[1]) }</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export { GeneralTableComponent };
