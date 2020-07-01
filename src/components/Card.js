import React from 'react';

export default function Card({ issueTitle, issueDescription, issueStatus }) {
  return (
    <div>
      <h1>{issueTitle}</h1>
      <p>{issueDescription}</p>
      <strong>{issueStatus}</strong>
    </div>
  );
}
