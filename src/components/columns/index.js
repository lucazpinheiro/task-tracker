import React from 'react';
import PropTypes from 'prop-types';
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

BackLogColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

DoingColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ReviewColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

DoneColumn.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
