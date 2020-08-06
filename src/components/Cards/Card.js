import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 90%;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: white;
  border-radius: 15px;
  padding: 2px 16px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const CardContainer = styled.div`
  // padding: 2px 16px;
`;

export default function CardWrapper({ CardContent }) {
  return (
    <Card>
      <CardContainer>
        <CardContent />
      </CardContainer>
    </Card>
  );
}

CardWrapper.propTypes = {
  CardContent: PropTypes.element.isRequired,
};
