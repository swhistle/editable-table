import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {Operations} from '../../store/operations';
import {ActionCreators, Actions} from '../../store/actions';
import Table from '../Table';

const TableContainer = styled.div`
  margin: 0 auto;
  padding: 3rem;
`;

class App extends React.PureComponent {
    constructor() {
        super();

        this._clickOnEditButton = this._clickOnEditButton.bind(this);
    }

    _clickOnEditButton(elementId, editableElement) {
        const isSavingMode = this.props.editableElementId === elementId;

        if (isSavingMode) {
            if (editableElement && typeof editableElement === 'object' && Object.keys(editableElement).length > 0) {
                const editedElementFromList = this.props.elementList
                    .find((item) => item._id === elementId || item.id === elementId);

                const updatedElement = {...editedElementFromList, ...editableElement};


                this.props.onUpdateElement(elementId, updatedElement);
            } else {
                this.props.onSelectEditableElement(null);
            }
        } else {
            this.props.onSelectEditableElement(elementId);
        }
    }

    componentDidMount() {
        this.props.onLoadElementList();
    }

    render() {
        const {elementList, editableElementId} = this.props;

        if (!elementList) {
            return null;
        }

        return (
            <TableContainer>
                <Table
                    items={elementList}
                    editableElementId={editableElementId}
                    clickOnEditButton={this._clickOnEditButton}
                />
            </TableContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, state);

const mapDispatchToProps = (dispatch) => ({
        onLoadElementList: () => {
            Operations.loadElementList(dispatch);
        },

        onSelectEditableElement: (elementId) => {
            dispatch(ActionCreators[Actions.SelectElementEditable](elementId))
        },

        onUpdateElement: (elementId, element) => {
            Operations.updateElement(dispatch, elementId, element);
        }
    }

);

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
