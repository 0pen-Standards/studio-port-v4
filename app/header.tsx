'use client';

import Link from 'next/link';
import Script from 'next/script';
import Analytics from './analytics';

export function Header() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WNC4CHD8NP"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WNC4CHD8NP', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Analytics />
    </>
  );
}
