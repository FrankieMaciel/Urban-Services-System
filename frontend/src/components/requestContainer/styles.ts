import styled from 'styled-components';

export const Container = styled.div`
  border: 0.5rem solid #DDD;
  display: flex;
  flex-direction: column;
  /* background on every other direct child element*/
  > :nth-child(2n) {
    background: #0003;
  }

  > :last-child {
    height: 100%; 
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  padding-right: 1rem;
`;

export const TextContent = styled.h2`
  font-weight: normal;
  line-break: anywhere;
`;

export const TextContainer = styled.div`
  background-color: #fff;
  padding: 0.5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Select = styled.select`
  width: 100%;
  height: 4rem !important;
  background: #DDD;
  color: gray;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border:none;
  cursor: pointer;

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