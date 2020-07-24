import React from 'react';
import PropTypes from 'prop-types';
import {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
} from './Column';
import '../App.css';

function selectIssues(issuesList) {
  const todoList = issuesList.filter((issue) => issue.status === 'to-do');

  const doingList = issuesList.filter((issue) => issue.status === 'doing');

  const reviewList = issuesList.filter((issue) => issue.status === 'review');

  const doneList = issuesList.filter((issue) => issue.status === 'done');

  return [todoList, doingList, reviewList, doneList];
}

export default function Board({ issues, updateStatus, openFormModalFunc, openIssueModalFunc }) {
  const [todoList, doingList, reviewList, doneList] = selectIssues(issues);
  return (
    <div className="board">
      <BackLogColumn content={todoList} updateStatus={updateStatus} formModalHandler={openFormModalFunc} issueModalHandler={openIssueModalFunc} />
      <DoingColumn content={doingList} updateStatus={updateStatus} issueModalHandler={openIssueModalFunc} />
      <ReviewColumn content={reviewList} updateStatus={updateStatus} issueModalHandler={openIssueModalFunc} />
      <DoneColumn content={doneList} updateStatus={updateStatus} issueModalHandler={openIssueModalFunc} />
    </div>
  );
}

Board.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};
