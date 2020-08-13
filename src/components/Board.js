import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
} from './Columns/Column';
import { selectIssues } from '../helpers';

const BoardContainer = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 90vh;
  border-radius: 5px;
  background-color: #708090;
  display: flex;
`;

export default function Board({
  issues,
  updateStatus,
  openFormModalFunc,
  openIssueModalFunc,
}) {
  const [todoList, doingList, reviewList, doneList] = selectIssues(issues);
  return (
    <BoardContainer>
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
    </BoardContainer>
  );
}

Board.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
  openFormModalFunc: PropTypes.func.isRequired,
  openIssueModalFunc: PropTypes.func.isRequired,
};
