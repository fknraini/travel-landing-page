"use client"

import "./globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&family=Unbounded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'thesignature';
                src: url('/fonts/Thesignature.ttf') format('truetype');
                font-weight: normal;
              }
            `,
          }}
        />
      </head>
      <body className="bg-vista-white">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}