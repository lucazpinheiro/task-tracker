import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

function getIssues() {
  const ISSUE_LIST = [
    {
      id: 'x00c31',
      title: 'search box',
      description: 'add search box to front page',
      status: 'to-do',
      addedDate: '',
      deadLineDate: '',
    },
    {
      id: 'x00c41',
      title: 'something',
      description: 'contemplar o vazio',
      status: 'to-do',
      addedDate: '',
      deadLineDate: '',
    },
    {
      id: 'x00c51',
      title: 'thething',
      description: '...',
      status: 'to-do',
      addedDate: '',
      deadLineDate: '',
    },
  ];
  return ISSUE_LIST;
}

function App() {
  const [issuesList, setIssuesList] = useState([]);

  useEffect(() => {
    setIssuesList(getIssues());
  }, []);

  return (
    <div>
      <h1>Issue tracker app</h1>
      <br />
      {issuesList.map((issue) => (
        <Card
          key={issuesList.id}
          issueTitle={issue.title}
          issueDescription={issue.description}
          issueStatus={issue.status}
        />
      ))}
    </div>
  );
}

export default App;
