import React from 'react';
import PropTypes from 'prop-types';
import StatusSelector from './StatusSelect';
import {
  Card,
  CardContainer,
  Title,
  Description,
  Tag,
} from './cardStyledComponents';

export default function IssueCard({
  issueId,
  issueTitle,
  issueDescription,
  issueStatus,
  updateStatus,
  issueModalHandler,
}) {
  function expandIssueHandler() {
    issueModalHandler();
  }
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
        <button type="button" onClick={expandIssueHandler}>
          Expand Issue
        </button>
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
