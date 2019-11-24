import React from 'react';
import styled from 'styled-components';
import COLORS from '../config/colors';

const Content = styled.p`
  font-size: 1rem;
  color: ${COLORS.DARK}
  font-weight: 500;
  // width: 80%;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    color: ${COLORS.SECONDARY_COLOR}
  }
`

export default (props) => (
  <Content {...props}>
    {props.children}
  </Content>
)