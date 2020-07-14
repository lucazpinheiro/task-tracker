import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusSelector from './StatusSelect';

const Card = styled.div`
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

const CardContainer = styled.div`
  padding: 2px 16px;
`;

const Title = styled.h2`
  color: #000;
  font-weight: 300;
`;

const Description = styled.p`
  color: #000;
  font-weight: 300;
`;

const Tag = styled.p`
  color: #000;
  font-weight: 300;
`;

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(0, 0, 0, 1.0);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  border-radius: 10px;
  :hover {
    opacity: 0.8;
  }
`;

export default function IssueCard({
  issueId,
  issueTitle,
  issueDescription,
  issueStatus,
  updateStatus,
}) {
  return (
    <Card>
      <CardContainer>
        <Title>
          {issueTitle}
        </Title>
        <Description>
          {issueDescription}
        </Description>
        <Tag>
          {issueStatus}
        </Tag>
        <StatusSelector
          issueId={issueId}
          currentStatus={issueStatus}
          updateStatus={updateStatus}
        />
      </CardContainer>
    </Card>
  );
}

IssueCard.propTypes = {
  issueId: PropTypes.string.isRequired,
  issueTitle: PropTypes.string.isRequired,
  issueDescription: PropTypes.string.isRequired,
  issueStatus: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
};
