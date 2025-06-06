import React, { useEffect, useState } from 'react';
import { ErrorMessageComponentI, InputComponentI } from '../../utils/components';
import { Container, Text} from './styles';

const ErrorMessageContainer: React.FC<ErrorMessageComponentI> = ({ text }) => { 

    return (
        <Container>
            <Text>{text}</Text>
        </Container>
      )
}

export default ErrorMessageContainer;