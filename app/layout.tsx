import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import tF from 'next/font/local';
import { Header } from './header';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nouhtrang.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Nouhtrang Thao — Designer',
    template: '%s | Nouhtrang Thao'
  },
  description:  'Nouhtrang Thao — Designer',
};

const tf = tF({
  src: '../public/font/NHaasGroteskTXStd-65Md.woff2', // adjust path if needed
  variable: '--font-TF',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <Header />
      <body suppressHydrationWarning
        className={`${tf.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-TF)] overflow-hidden">
            <div className="relative mx-auto w-full max-w-screen-3xl flex-1 px-4 pt-4">
              
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
