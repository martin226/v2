import { useState, useEffect } from 'react';

export default function useMobileDevice() {
  const [isMobileDevice, setIsMobileDevice] = useState(true); // Default to true to prevent flash

  useEffect(() => {
    const checkIfMobile = () => {
      // Check for touch device capabilities
      const maxTouchPoints = navigator.maxTouchPoints || 0;
      const isMultiTouch = maxTouchPoints > 2;

      // Check for mobile/tablet user agent
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      // Check for mobile platform
      const isMobilePlatform = /Android|iPhone|iPad|iPod/i.test(
        navigator.platform
      );

      // Special case for iPads that report as Macintosh
      const isMacUA = /Macintosh/i.test(navigator.userAgent);
      const isIpadPro = isMacUA && isMultiTouch;

      return isMobileUA || isMobilePlatform || isIpadPro;
    };

    setIsMobileDevice(checkIfMobile());
  }, []);

  return isMobileDevice;
} 