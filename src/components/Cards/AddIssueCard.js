import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function AddIssue({ modalHandler }) {
  function openModal() {
    modalHandler();
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions>
        <Button size="small" color="primary" onClick={openModal}>
          Add Issue
        </Button>
      </CardActions>
    </Card>
  );
}

AddIssue.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};
