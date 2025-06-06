import React from 'react';
import { InputComponentI } from '../../utils/components';
import { Container, Input, TextContainer } from './styles';
import { formatCpfCnpj } from './mask';

const InputCpfContainer: React.FC<InputComponentI> = ({ text, setState }) => { 

    return (
        <Container>
            <TextContainer>
                <text>{text}</text>
            </TextContainer>
            <Input maxLength={18} onChange={(e) => {
                setState(e.target.value)
                e.target.value = formatCpfCnpj(e.target.value)
            }}></Input>
        </Container>
      )
}

export default InputCpfContainer;