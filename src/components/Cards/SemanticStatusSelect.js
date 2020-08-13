import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';
import { statusOptions } from '../../common';

export default function SemanticStatusSelect({ issueId, updateStatus }) {
  const handleSelection = (e, data) => {
    // alert(issueId, data.value);
    console.log(issueId, data);
    // updateStatus(issueId, e.target.value);
  };

  return (
    <Select
      placeholder="Status"
      fluid
      selection
      options={statusOptions}
      onChange={handleSelection}
    />
    // <div>
    //   <select
    //     name="statusSelect"
    //     onChange={handleSelection}
    //     multiple=""
    //     classNmae="ui fluid dropdown"
    //   >
    //     {statusOptions.map((opt) => (
    //       <option value={opt.value} selected={opt.value === currentStatus}>
    //         {opt.text}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
}

SemanticStatusSelect.propTypes = {
  issueId: PropTypes.string.isRequired,
  // currentStatus: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
};
