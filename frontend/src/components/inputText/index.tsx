import React from 'react';
import { InputComponentI } from '../../utils/components';
import { Container, Input, TextContainer } from './styles';

const InputContainer: React.FC<InputComponentI> = ({ text, setState, newValue, isDisabled }) => { 

    return (
        <Container>
            <TextContainer>
                <text>{text}</text>
            </TextContainer>
            <Input disabled={isDisabled} value={newValue} onChange={(e) => {setState(e.target.value)}}></Input>
        </Container>
      )
}

export default InputContainer;