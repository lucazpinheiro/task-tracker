import React from 'react';
import PropTypes from 'prop-types';
import {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
} from './columns/index';
import '../App.css';

function selectIssues(issuesList) {
  const todoList = issuesList.filter((issue) => issue.status === 'to-do');

  const doingList = issuesList.filter((issue) => issue.status === 'doing');

  const reviewList = issuesList.filter((issue) => issue.status === 'review');

  const doneList = issuesList.filter((issue) => issue.status === 'done');

  return [todoList, doingList, reviewList, doneList];
}

export default function Board({ issues }) {
  const [todoList, doingList, reviewList, doneList] = selectIssues(issues);
  return (
    <div className="board">
      <BackLogColumn content={todoList} />
      <DoingColumn content={doingList} />
      <DoneColumn content={reviewList} />
      <ReviewColumn content={doneList} />
    </div>
  );
}

Board.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object).isRequired,
};
