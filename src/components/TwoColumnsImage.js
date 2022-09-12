import React, { useRef, useEffect } from 'react';

function TwoColumnsImage ({ image }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    }
    const observer = new IntersectionObserver(callback, {threshold: 0.25});

    observer.observe(imgRef.current)
  }, []);

  return (
    <img data-src={image} ref={imgRef} />
  )
}

export default TwoColumnsImage;