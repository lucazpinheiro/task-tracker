import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import FormModal from './components/Modals/FormModal';
import IssueModal from './components/Modals/IssueModal';
import { getIssueIndex } from './helpers/index';
import './App.css';

// this import is only use during development
// on production it will be replaced by an API call
import { ISSUE_LIST } from './common';

function getIssues() {
  return ISSUE_LIST;
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
    finishDate: '',
  });

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

  function closeIssueModal() {
    setIssueModalOpen(false);
  }

  return (
    <>
      <Board
        issues={issuesList}
        updateStatus={handleUpdateStatus}
        openFormModalFunc={openFormModal}
        openIssueModalFunc={openIssueModal}
      />
      <FormModal
        close={closeFormModal}
        modalStatus={formModalIsOpen}
        handleForm={handleAddIssue}
      />
      <IssueModal
        close={closeIssueModal}
        modalStatus={issueModalIsOpen}
        issueContent={issueModalContent}
      />
    </>
  );
}

export default App;
