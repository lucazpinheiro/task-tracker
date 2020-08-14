import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import StatusSelector from './StatusSelect';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

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

  const classes = useStyles();

  return (
    <div className="card-container">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {issueTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {issueDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={expandIssueHandler}>
            Expand Issue
          </Button>

          <StatusSelector
            issueId={issueId}
            currentStatus={issueStatus}
            updateStatus={updateStatus}
          />
        </CardActions>
      </Card>
    </div>
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
