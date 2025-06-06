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

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  color: #555;
  font-size: 1em;
  padding: 0.5em 2em;
  border: 2px solid #555;
  cursor: pointer;
`;

export const ButtonsDiv = styled.div`
  background-color: #fff;
  padding-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 50em) {
    justify-content: center;
    display: grid;
  }
`;

export const GridDiv = styled.div`
  background-color: #fff;
  padding: 0.5em;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr) );
`;

export const InputDiv = styled.div`
  background-color: #fff;
  padding-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export const Select = styled.select`
  width: 10rem;
  height: 5rem;
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