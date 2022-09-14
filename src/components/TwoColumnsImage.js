import React, { useRef, useEffect } from 'react';

function TwoColumnsImage ({ image, webp }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          entry.target.previousSibling.srcset = entry.target.previousSibling.dataset.srcset
          observer.unobserve(entry.target);
        }
      });
    }
    const observer = new IntersectionObserver(callback, {threshold: 0.25});

    observer.observe(imgRef.current)
  }, []);

  return (
    <picture>
      <source data-srcSet={webp} type="image/webp" />
      <img data-src={image} ref={imgRef} />
    </picture>
  )
}

export default TwoColumnsImage;