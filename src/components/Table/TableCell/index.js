import React from 'react';
import styled from 'styled-components';
import {TABLE_BORDER} from '../../../constants/constants';

const TableCellElement = styled.div`
    padding: 1rem;
    display: block;
    height: 3.5rem;
    box-sizing: border-box;
    border-right: ${TABLE_BORDER};
`;

function TableCell(props) {
    const {content} = props;

    return (
        <TableCellElement>{content}</TableCellElement>
    );
}

export default TableCell;
