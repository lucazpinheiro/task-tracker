import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card,
  CardContainer,
  AddIssueButton,
} from './cardStyledComponents';

export default function AddIssue() {
  function logger() {
    console.log('add issue button was clicked');
  }
  return (
    <Card>
      <CardContainer>
        <AddIssueButton onClick={logger}>
          +
        </AddIssueButton>
      </CardContainer>
    </Card>
  );
}
