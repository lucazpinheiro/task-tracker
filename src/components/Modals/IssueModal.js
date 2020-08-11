import React from 'react';
import PropTypes from 'prop-types';
import Modal, { setAppElement } from 'react-modal';
import customStyles from './modalStyle';
import { calculateTimeInterval } from '../../helpers';

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
    deadline,
  } = issueContent;

  function isOnTime(dadelineDateString) {
    const currentDateObj = new Date();
    const deadlineDateObj = new Date(dadelineDateString);
    const timeInterval = calculateTimeInterval(deadlineDateObj, currentDateObj);
    return timeInterval;
  }

  const timeInterval = isOnTime(deadline);

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
          <p>
            {`Issue is ${timeInterval >= 0 ? 'on time' : 'late'}`}
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
