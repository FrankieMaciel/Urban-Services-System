import React, { useEffect, useState } from 'react';
import { InputComponentI } from '../../utils/components';
import { Container, Title, text, Input, TextContainer } from './styles';
import axios from '../../services/axios';
import { RequestTypeE } from '../../utils/entities';

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