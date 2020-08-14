import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import { statusOptions } from '../../common';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function StatusSelector({ issueId, currentStatus, updateStatus }) {
  const classes = useStyles();

  function handleSelection(e) {
    updateStatus(issueId, e.target.value);
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentStatus}
          onChange={handleSelection}
        >
          {statusOptions.map((opt) => (
            <MenuItem value={opt.value}>{opt.text}</MenuItem>
          ))}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}

StatusSelector.propTypes = {
  issueId: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
};
