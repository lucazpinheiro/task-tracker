import React from 'react';
import Column from './Column';

const title = 'done';

export default function ReviewColumn({ content }) {
  return (
    <>
      <Column title={title} content={content} />
    </>
  );
}
