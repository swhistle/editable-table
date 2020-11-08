import React from 'react';
import TableCell from '../TableCell';

function TableRow(props) {
    const {values} = props;

    return (
        <div>
            {
                values.map((value, index) => (
                    <TableCell
                        key={value + '_' + index}
                        value={value}
                    />
                ))
            }
        </div>
    )
}

export default TableRow;
