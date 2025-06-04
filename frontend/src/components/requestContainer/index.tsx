import React, { useEffect, useState } from 'react';
import { RequestComponentI } from '../../utils/components';
import { Container, Title } from './styles';
import axios from '../../services/axios';
import { RequestTypeE } from '../../utils/entities';

const RequestContainer: React.FC<RequestComponentI> = ({ data }) => { 

    const [requestType, setRequestType] = useState<RequestTypeE[]>([]);
    
        useEffect(() => {
            (async () => {
              const data = await axios.get('/requests').then(resp => resp.data);
              setRequestType(data);
              console.log(requestType);
            })();
        }, []);

    return (
        <Container>
            <Title>{data.requestType}</Title>
            <Title>{data.adress}</Title>
            <Title>{data.description}</Title>
            <Title>{data.applicantName}</Title>
            <Title>{data.applicantCpf}</Title>
            <Title>{data.status}</Title>
        </Container>
      )
}

export default RequestContainer;