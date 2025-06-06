import React, { useEffect, useState } from 'react';
import { RequestComponentI } from '../../utils/components';
import { Container, Select, TextContainer, TextContent, Title } from './styles';
import axios from '../../services/axios';
import { RequestE } from '../../utils/entities';

const RequestContainer: React.FC<RequestComponentI> = ({ data, isAdminMode }) => { 

        const [requestType, setRequestType] = useState<String>('');
        const [applicantName, setApplicantName] = useState<String>('');
        const [applicantCPF, setApplicantCPF] = useState<String>('');
        
        useEffect(() => {
            (async () => {
                const ndata = await axios.get('/request-type').then(resp => resp.data);
                setRequestType(ndata[data.requestTypeId].requestName);

                const ndata2 = await axios.get('/applicant/getId/' + data.applicantId).then(resp => resp.data);
                setApplicantName(ndata2.name);
                setApplicantCPF(ndata2.fiscalId);
            })();
        }, [data.requestTypeId, data.applicantId]);

        async function HandleStatus(value:string, data: RequestE) {
            await axios.patch('/requests/' + data.id, {
                status: value,
            }).then(resp => resp.data);
            window.location.reload(); 
        }
    return (
        <Container>
            <TextContainer>
                <Title>Type</Title>
                <TextContent>{requestType}</TextContent>
            </TextContainer>
            <TextContainer>
                <Title>Addres</Title>
                <TextContent>{data.adress}</TextContent>
            </TextContainer>
            <TextContainer>
                <Title>Description</Title>
                <TextContent>{data.description}</TextContent>
            </TextContainer>
            <TextContainer>
                <Title>Applicant Name</Title>
                <TextContent>{applicantName}</TextContent>
            </TextContainer>
            <TextContainer>
                <Title>Applicant Cpf/Cnpj</Title>
                <TextContent>{applicantCPF}</TextContent>
            </TextContainer>
            <TextContainer>
                <Title>Status</Title>
                <TextContent>{data.status}</TextContent>
            </TextContainer>
            {isAdminMode ? (
                <Select onChange={(e) => {HandleStatus(e.target.value, data)}}>
                    <option key={0} selected={data.status === 'pendente'} value={"pendente"}>Pendente</option>
                    <option key={1} selected={data.status === 'em andamento'} value={"em andamento"}>Em andamento</option>
                    <option key={2} selected={data.status === 'concluido'} value={"concluido"}>Concluído</option>
                </Select>
            ) : null}
        </Container>
      )
}

export default RequestContainer;