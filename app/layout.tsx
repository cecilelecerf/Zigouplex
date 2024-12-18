import '@mantine/core/styles.css';

import React from 'react';
import { Box, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Nav } from '../components/ui/nav';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};
type RootLayoutProps = {
  children: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
  };
};
export default function RootLayout({ children, meta }: RootLayoutProps) {
  return (

    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>{meta?.title || "Zigouplex : Solution Naturelle Contre les Troubles d’Érection | Boostez Votre Confiance"}</title>
        <meta name="description" content={meta?.description || "Description par défaut"} />

      </head>
      <body>
        <SpeedInsights />
        <Analytics />
        <MantineProvider theme={theme}>

          <Box m="xl" >
            <Nav />
            {children}
          </Box>

        </MantineProvider>
      </body>
    </html>
  );
}
