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
    box-sizing: border-box;
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

class Table extends React.PureComponent {
    constructor(props) {
        super(props);

        this._changeInput = this._changeInput.bind(this);
        this._clickOnEditButton = this._clickOnEditButton.bind(this);
        this._editableElement = {};
    }

    _changeInput(itemKey, value) {
        this._editableElement[itemKey] = value;
    }

    _clickOnEditButton(element) {
        const editableElement = {...this._editableElement};
        this.props.clickOnEditButton(element._id || element.id, editableElement);
        this._editableElement = {};
    }

    render() {
        const {items, editableElementId, hideElementId = true, clickOnEditButton} = this.props;

        const tableElement = items[0];
        const areTableItemsObjects = typeof tableElement === 'object';

        const getElementKeys = (element) => {
            let elementKeys = Object.keys(element);

            if (hideElementId) {
                elementKeys = elementKeys.filter((key) => key !== '_id' && key !== 'id');
            }

            return elementKeys;
        }

        const getElementEntries = (element) => getElementKeys(element).map((key) => ({
            key: key,
            value: element[key]
        }));

        let tableContent;

        if (items.length === 0) {
            tableContent = <TableCell content='[]'/>;
        } else if (areTableItemsObjects) {
            const elementKeys = getElementKeys(tableElement).map((key) => ({
                key: key,
                value: key
            }));

            tableContent = (
                <TableContent>
                    <TableHeader>
                        <TableRow items={elementKeys} withEditButton={false}/>
                    </TableHeader>
                    <TableRowList>
                        {
                            items.map((element) => {
                                const isEditableElement = element._id === editableElementId || element.id === editableElementId;
                                return (
                                    <TableListItem
                                        key={element._id || element.id || getElementEntries(element)[0].value}> {/* in case the element has no 'id'  we will use value of its first key */}
                                        <TableRow
                                            items={getElementEntries(element)}
                                            editableMode={!!editableElementId && !isEditableElement}
                                            isEditableElement={isEditableElement}
                                            clickOnEditButton={() => this._clickOnEditButton(element)}
                                            changeInput={this._changeInput}
                                        />
                                    </TableListItem>
                                );
                            })
                        }
                    </TableRowList>
                </TableContent>
            )
        } else {
            tableContent = (
                <TableContent>
                    <TableHeader>
                        <TableCell content="value"/>
                    </TableHeader>
                    <TableRowList>
                        {
                            items.map((element, index) => (
                                <TableListItem key={element + '_' + index}>
                                    <TableCell content={element}/>
                                </TableListItem>
                            ))
                        }
                    </TableRowList>
                </TableContent>
            )
        }

        return tableContent;
    }
}

export default Table;
