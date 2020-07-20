import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import IssueForm from './components/IssueForm';
import CustomModal from './components/Modal';
import './App.css';

import ISSUE_LIST from './issues';

function getIssues() {
  return ISSUE_LIST;
}

function App() {
  const [issuesList, setIssuesList] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIssuesList(getIssues());
  }, []);

  function handleUpdateStatus(issueId, newStatus) {
    const issueIndex = issuesList.findIndex((element) => element.id === issueId);
    const updatedIssuesList = [...issuesList];
    updatedIssuesList[issueIndex].status = newStatus;
    setIssuesList(updatedIssuesList);
  }

  function handleAddIssue(issueData) {
    setIssuesList(issuesList.push(issueData));
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log('modal was opened');
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="board-container">
      <Board issues={issuesList} updateStatus={handleUpdateStatus} modalHandler={openModal} />
      <CustomModal after={afterOpenModal} close={closeModal} modalStatus={modalIsOpen} Component={IssueForm} formAction={handleAddIssue} />
    </div>
  );
}

export default App;
