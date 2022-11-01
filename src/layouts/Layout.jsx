import React from 'react';
import styled from 'styled-components';
import * as DT  from '../build/js/variables';

const Container = styled.div`
    background-color: ${DT.GlobalSecondary1};
    min-height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: ${DT.GlobalSm};
    padding: ${DT.GlobalSm} ${DT.GlobalXs}
`

export default function Layout({children}) {
  return (
    <Container>{children}</Container>
  )
}
