import styled from 'styled-components';

export const Card = styled.div`
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

export const CardContainer = styled.div`
  // padding: 2px 16px;
`;

export const Title = styled.h2`
  color: #000;
  font-weight: 300;
`;

export const Description = styled.p`
  color: #000;
  font-weight: 300;
`;

export const Tag = styled.p`
  color: #000;
  font-weight: 300;
`;

export const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(0, 0, 0, 1.0);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  border-radius: 10px;
  :hover {
    opacity: 0.8;
  }
`;

export const AddIssueButton = styled.button`
  // margin: 0 5px;
  // padding: 8px 14px;
  // background: rgba(16,123,175, 1.0);
  // color: #fff;
  // cursor: pointer;
  // border: 1px solid #fff;
  // outline: 0;
  // font-weight: 300;
  // border-radius: 10px;
  // :hover {
  //   opacity: 0.8;
  // }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;
