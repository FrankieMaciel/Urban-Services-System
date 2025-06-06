import styled from 'styled-components';

export const Container = styled.section`
  align-items: flex-start;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  margin: 1rem;
`;

export const InputDiv = styled.div`
  background-color: #fff;
  padding-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export const ButtonsDiv = styled.div`
  background-color: #fff;
  padding-bottom: 2em;;
  width: 80%;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  color: #555;
  font-size: 1em;
  padding: 0.5em 2em;
  border: 2px solid #555;
`;

export const Select = styled.select`
  width: 100%;
  height: 4rem;
  background: #DDD;
  color: gray;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border:none;
  margin-bottom: 1rem;

       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`;