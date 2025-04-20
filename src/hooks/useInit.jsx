import { useEffect, useRef } from 'react';
import { init } from "ityped";

const useInit = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      typeSpeed: 100,
      strings: ["Software Engineer"],
    });
  }, []);

  return textRef;
};

export default useInit;