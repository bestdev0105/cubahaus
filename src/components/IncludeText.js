import React from 'react';

const IncludeText = ({ included }) => (
  <span>{included ? "Included" : "Not Included"}</span>
);

export default IncludeText