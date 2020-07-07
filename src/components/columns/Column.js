import React from 'react';
import Card from '../Card';
import '../../App.css';


export default function Column({ title, content }) {
  return (
    <div className="column">
      <h2>
        {title}
      </h2>
      {content.map((issue) => (
        <Card
          key={issue.id}
          issueTitle={issue.title}
          issueDescription={issue.description}
          issueStatus={issue.status}
        />
      ))}
    </div>
  );
}
