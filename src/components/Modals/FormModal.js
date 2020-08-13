import React from 'react';
import PropTypes from 'prop-types';
import Modal, { setAppElement } from 'react-modal';
import customStyles from './modalStyle';
import IssueForm from '../Forms/IssueForm';

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
