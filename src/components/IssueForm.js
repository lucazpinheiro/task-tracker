import React from 'react';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import Modal from 'react-modal';

export default function IssueForm({ handleForm }) {
  // function logger() {
  //   console.log('add issue button was clicked');
  // }
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const issueObj = {
      id: 'x00c99',
      title: data.title,
      description: data.description,
      status: 'to-do',
    };

    console.log(issueObj);
    console.log(typeof(handleForm));
    // handleForm(issueObj);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <br />
        <input type="text" placeholder="Name" name="title" ref={register({ required: true })} />
      </label>
      <br />
      <label>
        Description
        <br />
        <input type="textarea" placeholder="Description" name="description" ref={register({ required: true })} />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}
