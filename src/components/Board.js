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

export default function Board({ issues, updateStatus, modalHandler }) {
  const [todoList, doingList, reviewList, doneList] = selectIssues(issues);
  return (
    <div className="board">
      <BackLogColumn content={todoList} updateStatus={updateStatus} modalHandler={modalHandler} />
      <DoingColumn content={doingList} updateStatus={updateStatus} />
      <ReviewColumn content={reviewList} updateStatus={updateStatus} />
      <DoneColumn content={doneList} updateStatus={updateStatus} />
    </div>
  );
}

Board.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};
