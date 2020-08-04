/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

export default function IssueForm({ handleForm }) {
  const { register, handleSubmit } = useForm();

  function dateFromString(initialString) {
    const splitedString = initialString.split('-');
    const formatedElements = splitedString.map((elem) => {
      if (elem.length === 2 && elem[0] === '0') {
        return elem.replace('0','');
      }
      return elem;
    });
    return `${formatedElements[0]}-${formatedElements[1]}-${formatedElements[2]}`
  }

  function onSubmit(data) {
    const deadlineString = dateFromString(data.dateInput);
    const issueObj = {
      id: 'x00c99',
      title: data.title,
      description: data.description,
      status: 'to-do',
      addedDate: JSON.stringify(new Date()),
      deadline: JSON.stringify(new Date(deadlineString)),
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
