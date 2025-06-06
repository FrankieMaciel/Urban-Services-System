import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding-bottom: 1em;
`;

export const TextContainer = styled.div`
  background-color: #fff;
  padding-bottom: 0.5em;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const text = styled.p`
  text-align: center;
`;

export const Input = styled.input<{ $inputColor?: string; }>`
  padding: 1em;
  color: #000;
  background: #D9D9D9;
  border: none;
  box-sizing: border-box;
  width: 100%;
`;