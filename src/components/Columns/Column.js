import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Cards/IssueCard';
import AddIssue from '../Cards/AddIssueCard';
import '../../App.css';

const ColumnContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: start; */
  flex-direction: column;
  overflow: hidden; 
  margin-left: 5px;
  margin-right: 5px;
  width: 25%;
  height: 100%;
`;

const ColumnContent = styled.div`
  /* justify-content: center;
  align-items: center; */
  overflow-y: auto;
  position:relative;
`;

function ColumnTitle({ title }) {
  return (
    <h2>
      {title}
    </h2>
  );
}

function BackLogColumn({
  content,
  updateStatus,
  formModalHandler,
  issueModalHandler,
}) {
  const TITLE = 'to-do';

  return (
    <ColumnContainer>
      <ColumnTitle title={TITLE} />
      <ColumnContent>
        {content.map((issue) => (
          <Card
            key={issue.id}
            issueId={issue.id}
            issueTitle={issue.title}
            issueDescription={issue.description}
            issueStatus={issue.status}
            updateStatus={updateStatus}
            issueModalHandler={issueModalHandler}
          />
        ))}
      </ColumnContent>
      <AddIssue modalHandler={formModalHandler} />
    </ColumnContainer>
  );
}

function DoingColumn({ content, updateStatus, issueModalHandler }) {
  const TITLE = 'doing';

  return (
    <ColumnContainer>
      <ColumnTitle title={TITLE} />
      <ColumnContent>
        {content.map((issue) => (
          <Card
            key={issue.id}
            issueId={issue.id}
            issueTitle={issue.title}
            issueDescription={issue.description}
            issueStatus={issue.status}
            updateStatus={updateStatus}
            issueModalHandler={issueModalHandler}
          />
        ))}
      </ColumnContent>
    </ColumnContainer>
  );
}

function ReviewColumn({ content, updateStatus, issueModalHandler }) {
  const TITLE = 'review';

  return (
    <ColumnContainer>
      <ColumnTitle title={TITLE} />
      <ColumnContent>
        {content.map((issue) => (
          <Card
            key={issue.id}
            issueId={issue.id}
            issueTitle={issue.title}
            issueDescription={issue.description}
            issueStatus={issue.status}
            updateStatus={updateStatus}
            issueModalHandler={issueModalHandler}
          />
        ))}
      </ColumnContent>
    </ColumnContainer>
  );
}

function DoneColumn({ content, updateStatus, issueModalHandler }) {
  const TITLE = 'done';

  return (
    <ColumnContainer>
      <ColumnTitle title={TITLE} />
      <ColumnContent>
        {content.map((issue) => (
          <Card
            key={issue.id}
            issueId={issue.id}
            issueTitle={issue.title}
            issueDescription={issue.description}
            issueStatus={issue.status}
            updateStatus={updateStatus}
            issueModalHandler={issueModalHandler}
          />
        ))}
      </ColumnContent>
    </ColumnContainer>
  );
}

export {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
};

ColumnTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

BackLogColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
  formModalHandler: PropTypes.func.isRequired,
  issueModalHandler: PropTypes.func.isRequired,
};

DoingColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
  issueModalHandler: PropTypes.func.isRequired,
};

ReviewColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
  issueModalHandler: PropTypes.func.isRequired,
};

DoneColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
  issueModalHandler: PropTypes.func.isRequired,
};
