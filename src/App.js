import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import FormModal from './components/FormModal';
import IssueModal from './components/IssueModal';
import './App.css';

import { ISSUE_LIST } from './common';
// import IssueForm from './components/IssueForm';

function getIssues() {
  return ISSUE_LIST;
}

function getIssueIndex(issueId, list) {
  const issueIndex = list.findIndex((element) => element.id === issueId);
  return issueIndex;
}

function App() {
  const [issuesList, setIssuesList] = useState([]);
  const [formModalIsOpen, setFormModalOpen] = useState(false);
  const [issueModalIsOpen, setIssueModalOpen] = useState(false);
  const [issueModalContent, setIssueModalContent] = useState({
    id: '',
    title: '',
    description: '',
    status: '',
    addedDate: '',
  });

  console.log(issuesList);

  useEffect(() => {
    setIssuesList(getIssues());
  }, []);

  function handleUpdateStatus(issueId, newStatus) {
    const issueIndex = getIssueIndex(issueId, issuesList);
    const updatedIssuesList = [...issuesList];
    updatedIssuesList[issueIndex].status = newStatus;
    setIssuesList(updatedIssuesList);
  }

  // form modal
  function openFormModal() {
    setFormModalOpen(true);
  }

  function afterOpenFormModal() {
    console.log('modal was opened');
  }

  function closeFormModal() {
    setFormModalOpen(false);
  }

  function handleAddIssue(issueData) {
    const newList = [...issuesList];
    newList.push(issueData);
    setIssuesList(newList);
    closeFormModal();
  }

  // issue content modal
  function openIssueModal(issueId) {
    const issueIndex = getIssueIndex(issueId, issuesList);
    const selectedIssue = issuesList[issueIndex];
    setIssueModalContent({
      ...selectedIssue,
    });
    setIssueModalOpen(true);
  }

  function afterOpenIssueModal() {
    console.log('modal was opened');
  }

  function closeIssueModal() {
    setIssueModalOpen(false);
  }

  return (
    <div className="board-container">
      <Board
        issues={issuesList}
        updateStatus={handleUpdateStatus}
        openFormModalFunc={openFormModal}
        openIssueModalFunc={openIssueModal}
      />
      <FormModal
        after={afterOpenFormModal}
        close={closeFormModal}
        modalStatus={formModalIsOpen}
        handleForm={handleAddIssue}
      />
      <IssueModal
        after={afterOpenIssueModal}
        close={closeIssueModal}
        modalStatus={issueModalIsOpen}
        issueContent={issueModalContent}
      />
    </div>
  );
}

export default App;
