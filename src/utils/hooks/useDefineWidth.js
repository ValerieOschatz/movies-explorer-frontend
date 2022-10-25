import { useState, useEffect } from 'react';

export default function useDefineWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    function defineWidth() {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        setWidth(window.innerWidth);
      }, 2000);
    }

    window.addEventListener("resize", defineWidth);

    return () => {
      window.removeEventListener("resize", defineWidth);
    }
  }, []);

  return width;
}
