import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import FormModal from './components/Modal';
import './App.css';

import { ISSUE_LIST } from './common';

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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log('modal was opened');
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleAddIssue(issueData) {
    const newList = [...issuesList];
    newList.push(issueData);
    setIssuesList(newList);
    closeModal();
  }

  return (
    <div className="board-container">
      <Board issues={issuesList} updateStatus={handleUpdateStatus} modalHandler={openModal} />
      <FormModal
        after={afterOpenModal}
        close={closeModal}
        modalStatus={modalIsOpen}
        handleForm={handleAddIssue}
      />
    </div>
  );
}

export default App;
