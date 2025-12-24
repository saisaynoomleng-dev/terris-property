import type { Metadata } from 'next';
import './globals.css';
import { lora, poppins } from '@/lib/font';

export const metadata: Metadata = {
  title: {
    default: 'Terris Property',
    template: '%s | Terris Property',
  },
  description:
    'Explore exclusive homes, curated spaces, and luxury properties designed for refined lifestyles.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
