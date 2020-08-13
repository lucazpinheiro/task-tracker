import React from 'react';
import PropTypes from 'prop-types';
import {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
} from './Columns/Column';
import { selectIssues } from '../helpers';
import '../App.css';

export default function Board({
  issues,
  updateStatus,
  openFormModalFunc,
  openIssueModalFunc,
}) {
  const [todoList, doingList, reviewList, doneList] = selectIssues(issues);
  return (
    <div className="board-container">
      <BackLogColumn
        content={todoList}
        updateStatus={updateStatus}
        issueModalHandler={openIssueModalFunc}
        formModalHandler={openFormModalFunc}
      />
      <DoingColumn
        content={doingList}
        updateStatus={updateStatus}
        issueModalHandler={openIssueModalFunc}
      />
      <ReviewColumn
        content={reviewList}
        updateStatus={updateStatus}
        issueModalHandler={openIssueModalFunc}
      />
      <DoneColumn
        content={doneList}
        updateStatus={updateStatus}
        issueModalHandler={openIssueModalFunc}
      />
    </div>
  );
}

Board.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
  openFormModalFunc: PropTypes.func.isRequired,
  openIssueModalFunc: PropTypes.func.isRequired,
};
