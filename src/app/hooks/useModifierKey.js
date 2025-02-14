"use client";

import { useState, useEffect } from 'react';

export default function useModifierKey() {
  const [isModifierPressed, setIsModifierPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey) {
        setIsModifierPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      if (!e.metaKey && !e.ctrlKey) {
        setIsModifierPressed(false);
      }
    };

    const handleBlur = () => setIsModifierPressed(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return isModifierPressed;
} 