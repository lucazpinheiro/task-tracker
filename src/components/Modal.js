import React from 'react';
import Modal, { setAppElement } from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
setAppElement('#root');

export default function CustomModal({
  Component, after, close, modalStatus, handleForm
}) {
  return (
    <div>
      <Modal
        isOpen={modalStatus}
        onAfterOpen={after}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Custom modal"
        parentSelector={() => document.querySelector('#root')}
      >
        {/* <h2 ref={(_subtitle) => { subtitle = _subtitle; }}>Hello</h2> */}
        <button type="button" onClick={close}>close</button>
        <Component handleForm={handleForm} />
      </Modal>
    </div>
  );
}
