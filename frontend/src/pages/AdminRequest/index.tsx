import React, { useEffect, useState } from 'react';
import { Container, Title, Button, ButtonsDiv, GridDiv } from './styles';
import RequestContainer from '../../components/requestContainer';
import { RequestE } from '../../utils/entities';
import axios from '../../services/axios';
import { useNavigate } from "react-router-dom";


const AdminRequest: React.FC = () => {

    const [requests, setRequests] = useState<RequestE[]>([]);

    useEffect(() => {
        (async () => {
          const data = await axios.get('/requests').then(resp => resp.data);
          setRequests(data);
          console.log(data);
        })();
    }, []);

    let navigate = useNavigate(); 
    const routeChangeBack = () =>{ 
      let path = `/`; 
      navigate(path);
    }

    return (
        <Container>
        <Title>Urban Services System</Title>
        <ButtonsDiv>
            <Button onClick={routeChangeBack}>Back</Button>
        </ButtonsDiv>
        <GridDiv>
          {requests.map(request => (
            <RequestContainer isAdminMode={true} key={request.id} data={request} />
          ))}
        </GridDiv>
        </Container>
    );
};

export default AdminRequest;
