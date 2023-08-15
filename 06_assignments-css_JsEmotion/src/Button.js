// Button.js
import React from 'react';
import { css } from '@emotion/react';

const buttonStyles = css`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2980b9;
  }
`;

function Button({ children, onClick }) {
  return (
    <button css={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
