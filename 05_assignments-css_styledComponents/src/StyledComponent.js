// StyledComponent.js
import React from 'react';
import styled from 'styled-components';

// Define the styled component
const StyledText = styled.p`
  color: blue;
  font-size: 18px;
  font-weight: bold;
`;

function StyledComponent() {
  return <StyledText>This is a Styled Component example.</StyledText>;
}

export default StyledComponent;
