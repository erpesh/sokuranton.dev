"use client";

import {useEffect, useState, TouchEvent} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Image from "next/image";
import {AiOutlineClose} from "react-icons/all";

interface ModalImageViewerProps {
  images: string[]
  isOpen: boolean
  close: () => void
}

const ModalImageViewer = ({images, isOpen, close}: ModalImageViewerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (event.key === 'ArrowRight') {
      handleNextImage();
    } else if (event.key === 'Escape') {
      close();
    }
  };

  let startX: number | null = null;
  let isZooming = false;

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    startX = event.changedTouches[0].clientX;
    isZooming = false;
  };

  const handleTouchMove = () => {
    isZooming = true;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!isZooming && startX !== null) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = endX - startX;

      if (deltaX > 50) {
        // Swiped right
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      } else if (deltaX < -50) {
        // Swiped left
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }

      startX = null;
      isZooming = false;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="image-viewer-container">
      <div className="modal-overlay" onClick={close}></div>
      <div className="image-view-container">
        <div className={"close-viewer"} onClick={close}>
          <AiOutlineClose size={36}/>
        </div>
        <div
          className="image-viewer-content"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {images.length > 1 ? <>
            <div className="nav-btn-desk prev-btn" onClick={handlePrevImage}>
              <FaChevronLeft className="icon" size={36}/>
            </div>
            <Image
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              className="image-view"
            />
            <div className="nav-btn-desk next-btn" onClick={handleNextImage}>
              <FaChevronRight className="icon" size={36}/>
            </div>
            <div className="nav-btn-container">
              <div className="nav-btn-mob prev-btn" onClick={handlePrevImage}>
                <FaChevronLeft className="icon" size={32}/>
              </div>
              <div className="nav-btn-mob next-btn" onClick={handleNextImage}>
                <FaChevronRight className="icon" size={32}/>
              </div>
            </div>
          </> : <Image
            src={images[currentImageIndex]}
            alt={`Project image ${currentImageIndex + 1}`}
            className="image-view"
          />}
          <div className="absolute inset-0 flex items-end justify-end">
            <div className="number-imgs p-2.5 rounded-full mr-2 mb-2">
              {`${currentImageIndex + 1} / ${images.length}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImageViewer;
