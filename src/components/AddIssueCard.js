import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card,
  CardContainer,
  AddIssueButton,
} from './cardStyledComponents';

export default function AddIssue({ modalHandler }) {
  function openModal() {
    modalHandler();
  }
  return (
    <Card>
      <CardContainer>
        <AddIssueButton onClick={openModal}>
          add issue
        </AddIssueButton>
      </CardContainer>
    </Card>
  );
}
