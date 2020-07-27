/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

export default function IssueForm({ handleForm }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const issueObj = {
      id: 'x00c99',
      title: data.title,
      description: data.description,
      status: 'to-do',
      addedDate: new Date(),
      finishDate: new Date(data.dateInput),
    };

    handleForm(issueObj);
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
        <input
          type="textarea"
          placeholder="Description"
          name="description"
          rows="5"
          cols="33"
          ref={register({ required: true })}
        />
      </label>
      <br />
      <label>
        Shoudl be finished by:
        <br />
        <input type="date" name="dateInput" ref={register({ required: true })} />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

IssueForm.propTypes = {
  handleForm: PropTypes.func.isRequired,
};
