import React from 'react';
import styled from 'styled-components';

function Button(props) {
    const {text, isDisabled = false, clickHandler} = props;

    const ButtonWrapper = styled.div`
        button {
            cursor: pointer;
            border: none;
            background: none;
            color: ${isDisabled ? '#aaa' : '#0095ff'};
            pointer-events: ${isDisabled ? 'none' : 'auto'};
        }
    `;

    return (
        <ButtonWrapper>
            <button type='button' onClick={clickHandler}>{text}</button>
        </ButtonWrapper>
    )
}

export default Button;
