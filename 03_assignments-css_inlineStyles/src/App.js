import React from 'react';

const inlineStyle = {
  color: 'blue',
  fontSize: '16px',
  fontWeight: 'bold',
};

function InlineStyledText() {
  return <p style={inlineStyle}>This is an inline styled text.</p>;
}

export default InlineStyledText;
