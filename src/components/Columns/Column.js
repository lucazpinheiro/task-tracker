import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Cards/IssueCard';
import AddIssue from '../Cards/AddIssueCard';

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
  const TITLE = 'todo';

  return (
    <div className="column-container">
      <ColumnTitle title={TITLE} />
      <div className="column-content">
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
      </div>
      <AddIssue modalHandler={formModalHandler} />
    </div>
  );
}

function DoingColumn({ content, updateStatus, issueModalHandler }) {
  const TITLE = 'doing';

  return (
    <div className="column-container">
      <ColumnTitle title={TITLE} />
      <div className="column-content">
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
      </div>
    </div>
  );
}

function ReviewColumn({ content, updateStatus, issueModalHandler }) {
  const TITLE = 'review';

  return (
    <div className="column-container">
      <ColumnTitle title={TITLE} />
      <div className="column-content">
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
      </div>
    </div>
  );
}

function DoneColumn({ content, updateStatus, issueModalHandler }) {
  const TITLE = 'done';

  return (
    <div className="column-container">
      <ColumnTitle title={TITLE} />
      <div className="column-content">
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
      </div>
    </div>
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
