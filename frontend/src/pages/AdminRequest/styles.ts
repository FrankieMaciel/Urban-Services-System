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
  padding-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr) );
`;