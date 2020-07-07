import React from 'react';
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
      <div className="row">
        <div className="column-container-x">
          <BackLogColumn content={todoList} />
        </div>

        <div className="column-container-x">
          <DoingColumn content={doingList} />
        </div>

        <div className="column-container-x">
          <DoneColumn content={reviewList} />
        </div>

        <div className="column-container-x">
          <ReviewColumn content={doneList} />
        </div>

      </div>
    </div>
  );
}
