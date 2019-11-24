import React from 'react';
import styled from 'styled-components';
import COLORS from '../config/colors';

const Error = styled.p`
  color: ${COLORS.ORANGE_YELLOW};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export default (props) => (
  <Error>{props.msg}</Error>
)