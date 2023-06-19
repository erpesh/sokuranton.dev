"use client";

import {FaAddressCard} from "react-icons/fa";

const CVButton = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.setAttribute('download', 'Anton Sokur.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownloadCV}>
      <FaAddressCard size={32}/>
    </button>
  );
};

export default CVButton;