import React from 'react';
import styled from 'styled-components';
import TableCell from '../TableCell';

function TableRow(props) {
    const {values} = props;

    const TableCellsContainer = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    const TableCellWrapper = styled.div`
        width: ${100 / values.length}%;
    `;

    return (
        <TableCellsContainer>
            {
                values.map((value, index) => (
                    <TableCellWrapper key={value + '_' + index}>
                        <TableCell
                            value={value}
                        />
                    </TableCellWrapper>

                ))
            }
        </TableCellsContainer>
    )
}

export default TableRow;
