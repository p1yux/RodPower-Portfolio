'use client'
import { useEffect } from 'react';

const WarningSupressor = () => {
  useEffect(() => {
    // Suppress hydration warnings globally
    if (typeof window !== 'undefined') {
      const originalError = console.error;
      const originalWarn = console.warn;
      
      console.error = (...args) => {
        if (
          args[0] && 
          typeof args[0] === 'string' && 
          (
            args[0].includes('Hydration failed') ||
            args[0].includes('There was an error while hydrating') ||
            args[0].includes('Text content does not match server-rendered HTML') ||
            args[0].includes('Hydration text mismatch') ||
            args[0].includes('Server HTML') ||
            args[0].includes('Warning: Text content did not match') ||
            args[0].includes('Warning: Expected server HTML') ||
            args[0].includes('Warning: Prop') ||
            args[0].includes('hydration')
          )
        ) {
          return;
        }
        originalError.apply(console, args);
      };
      
      console.warn = (...args) => {
        if (
          args[0] && 
          typeof args[0] === 'string' && 
          (
            args[0].includes('Hydration') ||
            args[0].includes('hydration') ||
            args[0].includes('Server HTML') ||
            args[0].includes('Warning: Text content did not match') ||
            args[0].includes('Warning: Expected server HTML') ||
            args[0].includes('Warning: Prop')
          )
        ) {
          return;
        }
        originalWarn.apply(console, args);
      };
      
      // Also suppress React DevTools warnings
      if (window.React) {
        window.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
          ...window.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          suppressHydrationWarning: true
        };
      }
    }
  }, []);

  return null;
};

export default WarningSupressor; 