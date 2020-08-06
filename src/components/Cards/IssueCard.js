import React from 'react';
import PropTypes from 'prop-types';
import StatusSelector from '../StatusSelect';
import {
  // Card,
  CardContainer,
  Title,
  Description,
  Tag,
  ButtonRow,
} from './cardStyledComponents';

import Card from './Card';

// export const Title = styled.h2`
//   color: #000;
//   font-weight: 300;
// `;

// export const Description = styled.p`
//   color: #000;
//   font-weight: 300;
// `;

// export const Tag = styled.p`
//   color: #000;
//   font-weight: 300;
// `;

export default function IssueCard({
  issueId,
  issueTitle,
  issueDescription,
  issueStatus,
  updateStatus,
  issueModalHandler,
}) {
  function expandIssueHandler() {
    issueModalHandler(issueId);
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
        <ButtonRow>
          <StatusSelector
            issueId={issueId}
            currentStatus={issueStatus}
            updateStatus={updateStatus}
          />
          <button type="button" onClick={expandIssueHandler}>
            Expand Issue
          </button>
        </ButtonRow>
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
  issueModalHandler: PropTypes.func.isRequired,
};
