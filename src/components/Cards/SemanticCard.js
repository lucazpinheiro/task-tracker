import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

export default function SemanticCard({
  issueId,
  issueTitle,
  issueDescription,
  issueStatus,
}) {
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
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
