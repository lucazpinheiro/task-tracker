import React from 'react';
import PropTypes from 'prop-types';
import {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
} from './columns/index';
import Controller from './Controller';
import '../App.css';

export default function Board({ issues }) {
  const [todoList, doingList, reviewList, doneList] = Controller(issues);
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
