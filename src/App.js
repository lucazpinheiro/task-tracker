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

  return (
    <div className="board-container">
      <Board issues={issuesList} />
    </div>
  );
}

export default App;
