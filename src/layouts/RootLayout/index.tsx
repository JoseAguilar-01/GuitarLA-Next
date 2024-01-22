import { Outfit } from 'next/font/google';
import type { Metadata } from 'next';
import { GuitarLAProvider } from '@context/GuitarLA';
import { Header, Footer } from '@components/index';
import '@assets/css/globals.css';
import '@assets/css/normalize.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GuitarLA',
  description: 'Ecommerce de guitarras desarrollado con Next.js v14.',
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='es'>
      <body className={outfit.className}>
        <GuitarLAProvider>
          <Header />

          {children}

          <Footer />
        </GuitarLAProvider>
      </body>
    </html>
  );
};
