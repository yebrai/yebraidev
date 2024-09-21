import { useAnimation } from "framer-motion";

const { useEffect } = require("react");

const useAnimations = (duration, delay) => {
    const controls = useAnimation();

   useEffect(() => {
    if (delay === false) {
        controls.start({ y: 0, opacity: 1, transition: { duration } });
    } else {
        setTimeout(() => {
            controls.start({ y: 0, opacity: 1, transition: { duration } });
          }, 1500);
    }
  }, []); 

  return controls
}

export default useAnimations
