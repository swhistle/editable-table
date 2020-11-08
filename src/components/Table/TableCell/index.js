import React from 'react';
import styled from 'styled-components';
import {TABLE_BORDER} from '../../../constants/constants';

const TableCellElement = styled.div`
    padding: 1rem;
    border-right: ${TABLE_BORDER};
`;

function TableCell(props) {
    const {value} = props;

    return <TableCellElement>{value}</TableCellElement>;
}

export default TableCell;
