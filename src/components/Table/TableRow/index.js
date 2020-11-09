import React from 'react';
import styled from 'styled-components';
import TableCell from '../TableCell';
import Button from '../../Button';
import Input from '../../Input';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {items, isEditableElement, editableMode = false, withEditButton = true, clickOnEditButton, changeInput} = this.props;

        const TableCellsContainer = styled.div`
            display: flex;
            justify-content: space-between;
        `;

        const TableCellWrapper = styled.div`
            width: ${100 / items.length}%;
        `;

        if (isEditableElement) {
            const elementObject = items.reduce((acc, currentItem) => ({
                ...acc,
                [currentItem['key']]: currentItem['value']
            }), {});

            if (elementObject && typeof elementObject === 'object') {
            }
        }

        return (
            <TableCellsContainer>
                {
                    items.map((item) => (
                        <TableCellWrapper key={item['key']}>
                            <TableCell
                                content={
                                    isEditableElement ?
                                        <Input inputValue={item['value']} itemKey={item['key']}
                                               changeHandler={changeInput}/> :
                                        item['value']
                                }
                            />
                        </TableCellWrapper>
                    ))
                }

                <TableCellWrapper>
                    <TableCell
                        content={withEditButton ?
                            <Button text={isEditableElement ? 'Save' : 'Edit'} isDisabled={editableMode} clickHandler={clickOnEditButton}/> : ''}
                    />
                </TableCellWrapper>
            </TableCellsContainer>
        )
    }
}

export default TableRow;
