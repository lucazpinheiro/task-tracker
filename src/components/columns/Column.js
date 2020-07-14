import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import '../../App.css';

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

Column.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};
