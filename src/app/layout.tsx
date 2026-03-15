import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Monomer | The End of Permanent Waste',
  description:
    'We use artificial intelligence to discover and engineer biodegradable plastics that perform like conventional polymers — and vanish when their job is done.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  );
}
