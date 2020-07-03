import React from 'react';
import Column from './Column';
import '../../App.css';

const title = 'to-do';

export default function BackLodColumn({ content }) {
  return (
    <>
      <Column title={title} content={content} />
    </>
  );
}
