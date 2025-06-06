import React, { useEffect, useState } from 'react';
import { Container, Title, InputDiv, Button, Select, ButtonsDiv} from './styles';
import InputContainer from '../../components/inputText';
import { RequestTypeE } from '../../utils/entities';
import axios from '../../services/axios';
import InputCpfContainer from '../../components/inputCpf';
import ErrorMessageContainer from '../../components/errorMessage';
import { useNavigate } from 'react-router-dom';

const CreateRequest: React.FC = () => {

    const [requestType, setRequestType] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [applicantCPF, setApplicantCPF] = useState<string>();
    const [applicantName, setApplicantName] = useState<string>();
    const [applicantNameIsDisabled, setApplicantNameIsDisabled] = useState<boolean>();
    
    const [requestTypes, setRequestTypes] = useState<RequestTypeE[]>([]);
    const [cpfCnpjErrorMessage, setCpfCnpjErrorMessage] = useState<string>('');
    let applicantId: Number;
    
    useEffect(() => {
        (async () => {
            const data = await axios.get('/request-type').then(resp => resp.data);
            setRequestTypes(data);
        })();
    }, []);

    function HandleRequestType(value:string) {
        setRequestType(value);
    }
    function HandleAddress(value:string) {
        setAddress(value);
    }
    function HandleDescription(value:string) {
        setDescription(value);
    }
    async function HandleApplicantCpf(value:string) {
        setApplicantCPF(value);
        setApplicantNameIsDisabled(false);
        setApplicantName('');
        if (value.length < 1) setCpfCnpjErrorMessage('Cpf/Cnpj é obrigatório!');
        else if (!(value.length === 14 || value.length === 18)) setCpfCnpjErrorMessage('O tamanho do Cpf/Cnpj é invalido!');
        else  {
            setCpfCnpjErrorMessage('');
            const data = await axios.get('/applicant/cpfcnpj/' + encodeURIComponent(value)).then(resp => resp.data);
            if (data.name)  {
                applicantId = data.id;
                console.log(applicantId);
                setApplicantName(data.name);
                setApplicantNameIsDisabled(true);
            }
        }
    }
    function HandleApplicantName(value:string) {
        setApplicantName(value);
    }

    async function handleCreate() {
        console.log('criando aplicant');
        if (!applicantCPF) return; 
        const data = await axios.get('/applicant/cpfcnpj/' + encodeURIComponent(applicantCPF)).then(resp => resp.data);
        console.log(data);
        if (data.name)  applicantId = data.id;
        else {
            const data1 = await axios.post('/applicant', {
                name: applicantName,
                fiscalId: applicantCPF
            }).then(resp => resp.data).catch(function (error) {
                console.log(error.toJSON());
            });
            applicantId = data1.id;
            console.log(data1.id);
        }

        await axios.post('/requests', {
            requestTypeId: Number(requestType),
            adress: address,
            description: description,
            applicantId: applicantId
        }).then(resp => resp.data);
        console.log('Create');
        routeChangeHome()
    }

    let navigate = useNavigate(); 
    const routeChangeHome = () =>{ 
      let path = `/`; 
      navigate(path);
    }

    return (
        <Container>
        <Title>Urban Services System</Title>
        <InputDiv>
            <ButtonsDiv>
                <Button onClick={routeChangeHome}>Back</Button>
            </ButtonsDiv>
            <Select onChange={(e) => {HandleRequestType(e.target.value)}}>
            <option value="" hidden>Type</option>
            {requestTypes.map(type => (
                <option key={type.id} value={type.id}>{type.requestName}</option>
            ))}
            </Select>
            <InputContainer text={"Address"} setState={HandleAddress}></InputContainer>
            <InputContainer text={"Description"} setState={HandleDescription}></InputContainer>
            <InputCpfContainer text={"Applicant CPF/CNPJ"} setState={HandleApplicantCpf}></InputCpfContainer>
            <ErrorMessageContainer text={cpfCnpjErrorMessage}></ErrorMessageContainer>
            <InputContainer isDisabled={applicantNameIsDisabled} newValue={applicantName} text={"Applicant Name"} setState={HandleApplicantName}></InputContainer>
            <Button disabled={
                !(requestType && address && description && applicantCPF && applicantName && cpfCnpjErrorMessage === '')
            } type="button" onClick={handleCreate}>Create</Button>
        </InputDiv>
        </Container>
    );
};

export default CreateRequest;
