import React from 'react';
import {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
} from './columns/index';
import '../App.css';

export default function Board({ issues }) {
  return (
    <div className="board-container">
      <div className="row">
        <BackLogColumn content={issues} />
        <DoingColumn content={issues} />
        <DoneColumn content={issues} />
        <ReviewColumn content={issues} />
      </div>
    </div>
  );
}
