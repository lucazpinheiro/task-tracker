// import BackLogColumn from './BackLogColumn';
// import DoingColumn from './DoingColumn';
// import DoneColumn from './DoneColumn';
// import ReviewColumn from './ReviewColumn';
import React from 'react';
import Column from './Column';


function BackLogColumn({ content }) {
  const TITLE = 'to-do';

  return (
    <>
      <Column title={TITLE} content={content} />
    </>
  );
}

function DoingColumn({ content }) {
  const TITLE = 'doing';

  return (
    <>
      <Column title={TITLE} content={content} />
    </>
  );
}

function ReviewColumn({ content }) {
  const TITLE = 'review';

  return (
    <>
      <Column title={TITLE} content={content} />
    </>
  );
}

function DoneColumn({ content }) {
  const TITLE = 'done';

  return (
    <>
      <Column title={TITLE} content={content} />
    </>
  );
}

export {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
};
