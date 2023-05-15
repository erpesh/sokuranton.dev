import React, { useState, useEffect } from 'react';


const NoSSR = ({ children }) => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  if (!canRender) return null;

  return children;
};

export default NoSSR;
