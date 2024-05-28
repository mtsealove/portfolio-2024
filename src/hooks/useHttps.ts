'use client';

import { useEffect } from 'react';

function useHttps() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === 'production' && !window.location.href.startsWith('https://')) {
      window.location.replace('https://mtsealove.com');
    }
  }, []);
}

export default useHttps;
