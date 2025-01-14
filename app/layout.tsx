import '@mantine/core/styles.css';

import React from 'react';
import { Box, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Nav } from '../components/ui/nav';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';
export const metadata = {
  title: 'Acme',
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
  },
}
type RootLayoutProps = {
  children: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
  };
};
export default function RootLayout({ children }: { children: any }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <Head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>{"Zigouplex : Médicament Naturel Contre les Troubles d'Érection - Améliorez Votre Vitalité et Performance"}</title>
        <meta name="description" content="Découvrez Zigouplex, la solution naturelle contre les troubles d’érection. Nos produits - Zigouplex Classique, Nightshot et Endurance Gel - sont conçus pour améliorer la circulation sanguine, booster la vitalité et optimiser les performances masculines. Recommandé par des experts en santé sexuelle." />
        <meta property="og:title" content="Zigouplex : Solution Naturelle Contre les Troubles d'Érection - Boostez Votre Vitalité et Performances" />
        <meta property="og:description" content="Zigouplex offre une solution naturelle et efficace contre les troubles d’érection. Découvrez nos produits : Zigouplex Classique, Nightshot et Endurance Gel, pour améliorer la circulation sanguine, stimuler votre vitalité et renforcer vos performances masculines. Recommandé par des experts." />
        {/* TODO : logo */}
        <meta property="og:image" content="URL_de_l_image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.zigouplex.shop/" />
        <meta name="twitter:title" content="Zigouplex : Solution Naturelle Contre les Troubles d'Érection" />
        <meta name="twitter:description" content="Découvrez nos produits naturels Zigouplex pour améliorer la circulation sanguine et la vitalité masculine." />
        <link rel="canonical" href="https://www.zigouplex.shop/" />


      </Head>
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
