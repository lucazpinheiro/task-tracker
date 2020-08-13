import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';

export default function AddIssue({ modalHandler }) {
  function openModal() {
    modalHandler();
  }

  return (
    <Card>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" onClick={openModal}>
            Add Issue
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

AddIssue.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};
