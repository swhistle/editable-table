import React from 'react';
import styled from 'styled-components';
import {INPUT_BORDER} from '../../constants/constants';

const InputWrapper = styled.div`
    input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0.25rem 0.5rem;
        border: ${INPUT_BORDER};
        border-radius: 2px;
    }
`;

class Input extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: props.inputValue
        }
    }

    render() {
        const {itemKey, changeHandler} = this.props;

        const onChange = (value) => {
            this.setState({
                value: value
            });
            changeHandler(itemKey, value);
        }

        return (
            <InputWrapper>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={(event) => onChange(event.target.value)}
                />
            </InputWrapper>
        )
    }
}

export default Input;
