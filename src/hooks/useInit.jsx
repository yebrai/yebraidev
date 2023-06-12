import { useEffect, useRef } from 'react';
import { init } from "ityped";

const useInit = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      typeSpeed: 100,
      strings: ["<Junior Full-stack Developer />"],
    });
  }, []);

  return textRef;
};

export default useInit;