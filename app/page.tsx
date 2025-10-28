import type { Metadata } from "next";
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Nouhtrang Thao | Designer",
  description: "Nouhtrang Thao",
  keywords: ['Nouhtrang', 'Thao', 'Design'],
    openGraph: {
    title: 'Nouhtrang Thao | Designer',
    description: 'Nouhtrang Thao',
    url: 'https://nouhtrang.com',
    siteName: 'Nouhtrang Thao',
    locale: 'en_US',
    type: 'website',
  },
     robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {
  return (
   <main className='font-main'>
        <div className="text-sm tracking-tight text-zinc-600">
          <h1 className="bg-zinc-200 w-fit">Nouhtrang Thao</h1>
          <p className="bg-zinc-400 w-fit">Available to collaborate: contact@nouhtrang.com</p>
        </div>
      </main>
  );
}
