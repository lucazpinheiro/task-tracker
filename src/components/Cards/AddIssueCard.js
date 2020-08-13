import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContainer,
  ButtonRow,
  Button,
} from './StyledCardComponents';

export default function AddIssue({ modalHandler }) {
  function openModal() {
    modalHandler();
  }
  return (
    <Card>
      <CardContainer>
        <ButtonRow>
          <Button onClick={openModal}>
            add issue
          </Button>
        </ButtonRow>
      </CardContainer>
    </Card>
  );
}

AddIssue.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};
