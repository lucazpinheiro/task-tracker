import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 90%;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: white;
  border-radius: 15px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const CardContainer = styled.div`
  padding: 2px 16px;
`;

export const Title = styled.h2`
  color: #000;
  font-weight: 300;
`;

export const Description = styled.p`
  color: #000;
  font-weight: 300;
`;

export const Tag = styled.p`
  color: #000;
  font-weight: 300;
`;

export const Button = styled.button``;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  // justify-content: flex-end;
`;
