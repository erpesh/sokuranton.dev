"use client";

import {FaAddressCard} from "react-icons/fa";

const CVButton = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Anton Sokur.pdf';
    link.setAttribute('download', 'Anton Sokur.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownloadCV}
      data-tooltip-id="buttons"
      data-tooltip-content="Download CV"
    >
      <FaAddressCard size={32}/>
    </button>
  );
};

export default CVButton;