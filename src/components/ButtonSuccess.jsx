import React from 'react';
import styled from 'styled-components';
import * as DT  from '../build/js/variables';

const StyledButtonSuccess = styled.button`
    height:${DT.ButtonsSizingHeightBase};
    width:${DT.ButtonsSizingWidthBase};
    color:${DT.ButtonsCopyColorPrimaryActive};
    background-color:${DT.ButtonsBgColorPrimaryActive};
    border:1px solid ${DT.ButtonsBgColorPrimaryActive};
    &:hover {
        color:${DT.ButtonsCopyColorPrimaryHover};
        background-color:${DT.ButtonsBgColorPrimaryHover};
        border:1px solid ${DT.ButtonsBorderColorPrimaryHover};
    };
    &:disabled {
        color:${DT.ButtonsCopyColorPrimaryDisabled};
        background-color:${DT.ButtonsBgColorPrimaryDisabled};
        border:1px solid ${DT.ButtonsBorderColorPrimaryDisabled};
    }
`;
export default function ButtonSuccess(props) {
  return (
    <StyledButtonSuccess  disabled={props.disabled}>ButtonSuccess</StyledButtonSuccess>
  )
}
