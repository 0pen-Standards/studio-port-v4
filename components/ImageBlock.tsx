import Image from 'next/image';

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
  className = 'h-auto w-full object-cover ',
}) => (
  <figure>
    <Image src={src} alt={alt} width={width} height={height} className={className} loading="lazy" />
    {caption && (
      <figcaption className="mt-2 text-center text-sm text-gray-600">{caption}</figcaption>
    )}
  </figure>
);

export default ImageBlock;
