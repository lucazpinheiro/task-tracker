import React from 'react';
import IssueCard from '../Card';
import '../../App.css';

export default function Column({ title, content }) {
  return (
    <div className="column">
      <h2>
        {title}
      </h2>
      {content.map((issue) => (
        <IssueCard
          key={issue.id}
          issueTitle={issue.title}
          issueDescription={issue.description}
          issueStatus={issue.status}
        />
      ))}
    </div>
  );
}
