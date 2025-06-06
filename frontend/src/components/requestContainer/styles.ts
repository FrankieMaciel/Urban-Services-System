import styled from 'styled-components';

export const Container = styled.div`
  background-color: #DDD;
  padding: 0.5rem;
  margin: 0.5rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  padding-right: 1rem;
`;

export const TextContent = styled.h2`
  font-weight: normal;
`;

export const TextContainer = styled.div`
  background-color: #fff;
  padding-bottom: 0.5em;
  display: flex;
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