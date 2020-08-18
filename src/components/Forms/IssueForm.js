import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  makeStyles,
  Button,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function IssueForm({ handleForm }) {
  const classes = useStyles();

  const [issueTitle, setIssueTitle] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [issueDeadline, setIssueDeadline] = useState('');

  function handleTitleChange(e) {
    setIssueTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setIssueDescription(e.target.value);
  }

  function handleDeadlineChange(e) {
    setIssueDeadline(e.target.value);
  }

  function handleSubmit() {
    const issueObj = {
      id: 'x00c99',
      title: issueTitle,
      description: issueDescription,
      status: 'to-do',
      addedDate: new Date(),
      deadline: new Date(issueDeadline),
    };
    handleForm(issueObj);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container item xs={50} direction="column" spacing={3}>
        <Grid item>
          <TextField
            id="issue-title"
            name="title"
            label="Title"
            onChange={handleTitleChange}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            id="issue-description"
            name="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            onChange={handleDescriptionChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="datetime-local"
            label="Deadline"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDeadlineChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" size="small" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

IssueForm.propTypes = {
  handleForm: PropTypes.func.isRequired,
};
