import React from 'react';
import Column from './Column';

const title = 'doing';

export default function DoingColumn({ content }) {
  return (
    <>
      <Column title={title} content={content} />
    </>
  );
}
