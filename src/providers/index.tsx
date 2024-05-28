'use client';

import { ReactNode } from 'react';
import ReduxProvider from '@/providers/ReduxProvider';

interface Props {
    children?: ReactNode;
}

function RootProvider({ children }:Props) {
  return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
  );
}

export default RootProvider;
