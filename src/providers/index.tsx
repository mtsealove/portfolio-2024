'use client';

import { ReactNode } from 'react';
import ReduxProvider from '@/providers/ReduxProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Props {
    children?: ReactNode;
}

function RootProvider({ children }:Props) {
  const client = new QueryClient();
  return (
        <ReduxProvider>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </ReduxProvider>
  );
}

export default RootProvider;
