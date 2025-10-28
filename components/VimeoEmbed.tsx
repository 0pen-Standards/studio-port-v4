"use client";

import { useEffect } from 'react';

type VimeoEmbedProps = {
  videoId: string;
  title: string;
};

const VimeoEmbed = ({ videoId, title }: VimeoEmbedProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative pt-[56.25%]">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute top-0 left-0 w-full h-full"
        title={title}
      ></iframe>
    </div>
  );
};

export default VimeoEmbed;
