import '@/styles/globals.css';
import '@/styles/bootstrap.min.css';
import React from 'react';
import type { AppProps } from 'next/app';
import MainLayout from '@/layout/main-layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from '@/utils/error-boundary.exception';
import ServerError from '@/components/server-error';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  if (pageProps.encounteredServerError) {
    return (
      <MainLayout>
        <ServerError {...pageProps} />
      </MainLayout>
    );
  }

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
