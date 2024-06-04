// app/layout.jsx
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Énergie Solaire',
  description: 'Informations sur l\'énergie solaire',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
