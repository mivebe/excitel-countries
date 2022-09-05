import { useState } from "react";
import Dropdown from './Dropdown';
import ViewTypeSelector from './ViewTypeSelector';
import { categoriesToShow, initialSortedColumns } from "../utils/constants";
import upArrow from '../resources/icons/up-arrow.png';
import downArrow from '../resources/icons/down-arrow.png';
import filterIcon from '../resources/icons/filter.png';

const TableHeader = () => {
    const [isSorted, setIsSorted] = useState(initialSortedColumns)

    const handleInnerClick = e => {
        if (isSorted[e.target.name]) { console.log("alreaddy sorted"); }
        setIsSorted({ ...initialSortedColumns, [e.target.name]: true })
    }
    return (
        <div id="table-header" >
            <div id="table-header__bar">
                <div id="view-type-selector" className="table-header__section">
                    <ViewTypeSelector />
                </div>
                <div className="table-header__section">
                    <Dropdown />
                </div>
                <div className="table-header__section">
                    <input defaultValue={'Search'} />
                </div>
                <div className="table-header__section">
                    <button id="filter-button">
                        <img className="filter-icon" src={filterIcon} alt="filter" />
                        <p>{` Filter`}</p>
                    </button>
                </div>
            </div>
            <div id="field-categories" onClick={handleInnerClick}>
                {categoriesToShow.map(category =>
                    <button key={category.id} title={category.title} name={category.name}>
                        {/* {`${category.title} ${isSorted[category.name] ? '^' : 'v'}`} */}
                        {`${category.title} `}
                        {<img className="column-arrow" src={isSorted[category.name] ? upArrow : downArrow} alt='arrow' />}
                    </button>)
                }
            </div>
        </div>
    )
}
export default TableHeader