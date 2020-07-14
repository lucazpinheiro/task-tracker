import React from 'react';
import PropTypes from 'prop-types';
import { statusOptions } from '../common';

export default function StatusSelector({ issueId, currentStatus, updateStatus }) {
  const handleSelection = (e) => {
    updateStatus(issueId, e.target.value);
  };

  return (
    <div>
      <select name="statusSelect" onChange={handleSelection}>
        {statusOptions.map((opt) => (
          <option value={opt.value} selected={opt.value === currentStatus}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
}

StatusSelector.propTypes = {
  issueId: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
};
