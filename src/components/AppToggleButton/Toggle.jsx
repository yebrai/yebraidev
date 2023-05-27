import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: isOpen ? 0.8 : 1 }}
        transition={{ duration: 0.2 }}
        onClick={toggle}
      >
        Toggle
      </motion.button>
      {isOpen && <div>Contenido del toggle</div>}
    </div>
  );
};