import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../App.css';

function BackLogColumn({ content, updateStatus }) {
  const TITLE = 'to-do';

  return (
    <>
      <Column title={TITLE} content={content} updateStatus={updateStatus} />
    </>
  );
}

function DoingColumn({ content, updateStatus }) {
  const TITLE = 'doing';

  return (
    <>
      <Column title={TITLE} content={content} updateStatus={updateStatus} />
    </>
  );
}

function ReviewColumn({ content, updateStatus }) {
  const TITLE = 'review';

  return (
    <>
      <Column title={TITLE} content={content} updateStatus={updateStatus} />
    </>
  );
}

function DoneColumn({ content, updateStatus }) {
  const TITLE = 'done';

  return (
    <>
      <Column title={TITLE} content={content} updateStatus={updateStatus} />
    </>
  );
}

export default function Column({ title, content, updateStatus }) {
  return (
    <div className="column-container">
      <div className="column">
        <h2>
          {title}
        </h2>
        {content.map((issue) => (
          <Card
            key={issue.id}
            issueId={issue.id}
            issueTitle={issue.title}
            issueDescription={issue.description}
            issueStatus={issue.status}
            updateStatus={updateStatus}
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

BackLogColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};

DoingColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};

ReviewColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};

DoneColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};
