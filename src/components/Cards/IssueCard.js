import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import StatusSelector from './StatusSelect';
// import SemanticStatusSelect from './SemanticStatusSelect';


export default function IssueCard({
  issueId,
  issueTitle,
  issueDescription,
  issueStatus,
  updateStatus,
  issueModalHandler,
}) {
  function expandIssueHandler() {
    issueModalHandler(issueId);
  }
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {issueTitle}
        </Card.Header>
        {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
        <Card.Description>
          {issueDescription}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" onClick={expandIssueHandler}>
            Expand Issue
          </Button>
          {/* <Button basic color="green">
            Next step
          </Button> */}
          {/* <SemanticStatusSelect
            issueId={issueId}
            updateStatus={updateStatus}
          /> */}
        </div>
        <StatusSelector
          issueId={issueId}
          currentStatus={issueStatus}
          updateStatus={updateStatus}
        />
      </Card.Content>
    </Card>
  );
}

IssueCard.propTypes = {
  issueId: PropTypes.string.isRequired,
  issueTitle: PropTypes.string.isRequired,
  issueDescription: PropTypes.string.isRequired,
  issueStatus: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
  issueModalHandler: PropTypes.func.isRequired,
};
