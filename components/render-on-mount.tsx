import React, { useState, useEffect } from 'react';


const RenderOnMount = ({ children }) => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  if (!canRender) return null;

  return children;
};

export default RenderOnMount;
