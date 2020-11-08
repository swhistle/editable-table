import React from 'react';
import styled from 'styled-components';
import Table from '../Table';
import unicorns from '../../data/unicorns.js';

const TableContainer = styled.div`
  margin: 0 auto;
  padding: 3rem;
`;

function App() {
    return (<TableContainer>
        <Table items={unicorns}/>
    </TableContainer>);
}

export default App;
