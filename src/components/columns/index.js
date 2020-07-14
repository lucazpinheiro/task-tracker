import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

function BackLogColumn({ content, updateStatus }) {
  const TITLE = 'to-do';

  return (
    <>
      <Column title={TITLE} content={content} updateStatus={updateStatus} />
    </>
  );
}

function DoingColumn({ content, updateStatus }) {
  const TITLE = 'doing';

  return (
    <>
      <Column title={TITLE} content={content} updateStatus={updateStatus} />
    </>
  );
}

function ReviewColumn({ content, updateStatus }) {
  const TITLE = 'review';

  return (
    <>
      <Column title={TITLE} content={content} updateStatus={updateStatus} />
    </>
  );
}

function DoneColumn({ content, updateStatus }) {
  const TITLE = 'done';

  return (
    <>
      <Column title={TITLE} content={content} updateStatus={updateStatus} />
    </>
  );
}

export {
  BackLogColumn,
  DoingColumn,
  DoneColumn,
  ReviewColumn,
};

BackLogColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};

DoingColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};

ReviewColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};

DoneColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired,
};
