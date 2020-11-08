import React from 'react';
import TableRow from "./TableRow";
import TableCell from "./TableCell";

function Table(props) {
    const {items, hideElementId = true} = props;

    const tableElement = items[0];
    const areTableItemsObjects = typeof tableElement === 'object';

    const getElementKeys = (element) => {
        let elementKeys = Object.keys(element);

        if (hideElementId) {
            elementKeys = elementKeys.filter((key) => key !== 'id');
        }

        return elementKeys;
    }

    const getElementValues = (element) => getElementKeys(element).map((key) => element[key]);

    let tableContent;

    if (areTableItemsObjects) {
        const elementKeys = getElementKeys(tableElement);

        tableContent = (
            <div className='table'>
                <TableRow values={elementKeys}/>
                <ul>
                    {
                        items.map((element) => (
                            <li key={element.id || getElementValues(element)[0]}> {/* in case the element has no 'id'  we will use value of its first key */}
                                <TableRow values={getElementValues(element)}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    } else {
        tableContent = (
            <ul>
                {
                    items.map((element, index) => (
                        <li key={element + '_' + index}>
                            <TableCell value={element}/>
                        </li>
                    ))
                }
            </ul>
        )
    }

    return (
        <>
            {tableContent}
        </>
    );

}

export default Table;
