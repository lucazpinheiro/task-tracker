import React from 'react';
import PropTypes from 'prop-types';
import Modal, { setAppElement } from 'react-modal';
import {
  Container,
  Chip,
  Typography,
  makeStyles,
} from '@material-ui/core';
import customStyles from './modalStyle';
import { calculateTimeInterval } from '../../helpers';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
setAppElement('#root');

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 'auto',
  },
});

export default function IssueModal({
  after,
  close,
  modalStatus,
  issueContent,
}) {
  const classes = useStyles();

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
        <Container fixed>
          <div className={classes.root}>
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <Chip
              variant="outlined"
              label={status}
              color="primary"
            />
            <Typography variant="h4" gutterBottom>
              { title }
            </Typography>
            <Typography variant="body1">
              { description }
            </Typography>
            <p>
              {`Issue is ${timeInterval >= 0 ? 'on time' : 'late'}`}
            </p>
          </div>
        </Container>
      </Modal>
    </div>
  );
}

IssueModal.propTypes = {
  after: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  issueContent: PropTypes.shape.isRequired,
};
