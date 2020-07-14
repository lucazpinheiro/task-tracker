import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

import ISSUE_LIST from './issues';

function getIssues() {
  return ISSUE_LIST;
}

function App() {
  const [issuesList, setIssuesList] = useState([]);

  useEffect(() => {
    setIssuesList(getIssues());
  }, []);

  function handleUpdateStatus(issueId, newStatus) {
    const issueIndex = issuesList.findIndex((element) => element.id === issueId);
    const updatedIssuesList = [...issuesList];
    updatedIssuesList[issueIndex].status = newStatus;
    setIssuesList(updatedIssuesList);
  }

  return (
    <div className="board-container">
      <Board issues={issuesList} updateStatus={handleUpdateStatus} />
    </div>
  );
}

export default App;
