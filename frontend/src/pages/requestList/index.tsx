import React, { useEffect, useState } from 'react';
import { Container, Title } from './styles';
import RequestContainer from '../../components/requestContainer';
import { RequestE } from '../../utils/entities';
import axios from '../../services/axios';

const RequestList: React.FC = () => {

    const testeData: RequestE = {
        id: 0,
        requestType: 0,
        adress: 'Rua legal!',
        description: 'Tapar um buraco aí',
        applicantName: 'tully',
        applicantCpf: '000.000.000-00',
        status: 'Pendente'
    }

    const [requests, setRequests] = useState<RequestE[]>([]);

    useEffect(() => {
        (async () => {
          const data = await axios.get('/requests').then(resp => resp.data);
          setRequests(data);
          console.log(requests);
        })();
    }, []);

    return (
        <Container>
        <Title>Urban Services System</Title>
        {requests.map(request => (
          <RequestContainer key={request.id} data={request} />
        ))}
        </Container>
    );
};

export default RequestList;
