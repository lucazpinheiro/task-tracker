import React from 'react';
import PropTypes from 'prop-types';
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

export default function IssueModal({
  after,
  close,
  modalStatus,
  issueContent,
}) {
  const {
    title,
    description,
    status,
  } = issueContent;

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

        <div>
          <h2>
            { title }
          </h2>
          <p>
            { description }
          </p>
          <h3>
            { status }
          </h3>
        </div>

      </Modal>
    </div>
  );
}

IssueModal.propTypes = {
  after: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  issueContent: PropTypes.shape.isRequired,
  // handleForm: PropTypes.func.isRequired,
};