import React from 'react';
import styled from 'styled-components';

import TableRow from './TableRow';
import TableCell from './TableCell';
import {TABLE_BORDER, TABLE_HEADER_COLOR, TEXT_MAIN_COLOR} from '../../constants/constants';

const TableContent = styled.div`
    border: ${TABLE_BORDER};
    border-right: 0;
    color: ${TEXT_MAIN_COLOR};
    font-size: 1rem;
`;

const TableHeader = styled.div`
    background-color: ${TABLE_HEADER_COLOR};
    font-weight: bold;
`;

const TableRowList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const TableListItem = styled.li`
    border-top: ${TABLE_BORDER};
`;

function Table(props) {
    const {items, hideElementId = true} = props;

    const tableElement = items[0];
    const areTableItemsObjects = typeof tableElement === 'object';

    const getElementKeys = (element) => {
        let elementKeys = Object.keys(element);

        if (hideElementId) {
            elementKeys = elementKeys.filter((key) => key !== '_id' && key !== 'id');
        }

        return elementKeys;
    }

    const getElementValues = (element) => getElementKeys(element).map((key) => element[key]);

    let tableContent;

    if (items.length === 0) {
        tableContent = <TableCell value='[]'/>;
    } else if (areTableItemsObjects) {
        const elementKeys = getElementKeys(tableElement);

        tableContent = (
            <TableContent>
                <TableHeader>
                    <TableRow values={elementKeys}/>
                </TableHeader>
                <TableRowList>
                    {
                        items.map((element) => (
                            <TableListItem
                                key={element._id || element.id || getElementValues(element)[0]}> {/* in case the element has no 'id'  we will use value of its first key */}
                                <TableRow values={getElementValues(element)}/>
                            </TableListItem>
                        ))
                    }
                </TableRowList>
            </TableContent>
        )
    } else {
        tableContent = (
            <TableContent>
                <TableHeader>
                    <TableCell value="value"/>
                </TableHeader>
                <TableRowList>
                    {
                        items.map((element, index) => (
                            <TableListItem key={element + '_' + index}>
                                <TableCell value={element}/>
                            </TableListItem>
                        ))
                    }
                </TableRowList>
            </TableContent>
        )
    }

    return (
        <>
            {tableContent}
        </>
    );

}

export default Table;
