import React from 'react';
// import PropTypes from 'prop-types';
// import Modal from 'react-modal';

export default function IssueForm() {
  // function logger() {
  //   console.log('add issue button was clicked');
  // }
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
