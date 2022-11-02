import React from 'react';
import styled from 'styled-components';
import * as DT  from '../build/js/variables';

const StyledButtonDanger = styled.button`
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
export default function ButtonDanger(props) {
  return (
    <StyledButtonDanger  disabled={props.disabled}>ButtonDanger</StyledButtonDanger>
  )
}
