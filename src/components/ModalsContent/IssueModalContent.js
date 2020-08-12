import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 50vw;
  height: 70vh;
  backgound-color: red;
`;

const Title = styled.h1`
  color: #000;
  font-weight: 300;
`;

const Description = styled.p`
  color: #000;
  font-weight: 500;
`;

const Status = styled.p`
  color: #000;
  font-weight: 300;
`;

const Date = styled.p`
  color: #000;
  font-weight: 300;
`;


export default function IssueModalContent(
  title,
  description,
  status,
  addedDate,
  deadline,
) {
  return (
    <ContentContainer>
      <h2>test</h2>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
      <Status>
        {status}
      </Status>
      <Date>
        {addedDate}
      </Date>
      <Date>
        {deadline}
      </Date>
    </ContentContainer>
  );
}
