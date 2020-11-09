import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {Operations, ActionCreators, Actions} from '../../reducer';
import Table from '../Table';

const TableContainer = styled.div`
  margin: 0 auto;
  padding: 3rem;
`;

class App extends React.PureComponent {
    constructor() {
        super();
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
                <Table items={elementList}/>
            </TableContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, state);

const mapDispatchToProps = (dispatch) => ({
        onLoadElementList: () => {
            Operations.loadElementList(dispatch);
        }
    }

);

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
