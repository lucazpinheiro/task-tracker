import React from 'react';
import Column from './Column';

const title = 'review';

export default function ReviewColumn({ content }) {
  return (
    <>
      <Column title={title} content={content} />
    </>
  );
}
