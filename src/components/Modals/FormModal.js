import React from 'react';
import PropTypes from 'prop-types';
import Modal, { setAppElement } from 'react-modal';
import IssueForm from '../IssueForm';

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

export default function FormModal({
  after, close, modalStatus, handleForm,
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
        <button type="button" onClick={close}>close</button>
        <IssueForm handleForm={handleForm} />
      </Modal>
    </div>
  );
}

FormModal.propTypes = {
  after: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  handleForm: PropTypes.func.isRequired,
};
