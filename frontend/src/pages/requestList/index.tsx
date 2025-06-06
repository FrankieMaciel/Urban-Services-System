import React, { useEffect, useState } from 'react';
import { Container, Title, Button, ButtonsDiv, GridDiv, InputDiv, Select } from './styles';
import RequestContainer from '../../components/requestContainer';
import { RequestE } from '../../utils/entities';
import axios from '../../services/axios';
import { useNavigate } from "react-router-dom";
import InputContainer from '../../components/inputText';


const RequestList: React.FC = () => {

    const [requests, setRequests] = useState<RequestE[]>([]);
    const [searchType, setSearchType] = useState<string>();

    useEffect(() => {
        (async () => {
          const data = await axios.get('/requests').then(resp => resp.data);
          setRequests(data);
          console.log(data);
        })();
    }, []);

    let navigate = useNavigate(); 
    const routeChangeCreate = () =>{ 
      let path = `create`; 
      navigate(path);
    }
    const routeChangeAdmin = () =>{ 
      let path = `admin`; 
      navigate(path);
    }
    async function HandleSearch(value:string) {
      if (!searchType) return;
      console.log(value);
      if (value === '') {
        const data = await axios.get('/requests').then(resp => resp.data);
        setRequests(data);
      } else {
        const data1 = await axios.get('/requests/search', { params: {
          [searchType]: value,
        }
      }).then(resp => resp.data);
      console.log(data1);
      setRequests(data1);
    }
    }
    function HandleTypeSearch(value:string) {
      setSearchType(value);
    }

    return (
        <Container>
        <Title>Urban Services System</Title>
        <ButtonsDiv>
          <Button onClick={routeChangeCreate}>Create new request</Button>
          <Button onClick={routeChangeAdmin}>status management</Button>
        </ButtonsDiv>
        <ButtonsDiv>
          <Select onChange={(e) => {HandleTypeSearch(e.target.value)}}>
          <option key={0} value={"requestTypeId"}>Type</option>
          <option key={1} value={"adress"}>Addres</option>
          <option key={2} value={"description"}>Description</option>
          <option key={3} value={"status"}>Status</option>
          </Select>
          <InputContainer text={"Search"} setState={HandleSearch}></InputContainer>
        </ButtonsDiv>
        <GridDiv>
          {requests.map(request => (
            <RequestContainer key={request.id} data={request} />
          ))}
        </GridDiv>
        </Container>
    );
};

export default RequestList;
