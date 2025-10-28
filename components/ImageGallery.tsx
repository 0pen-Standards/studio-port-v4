import Image from 'next/image';

type ImageItem = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: ImageItem[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative w-full max-w-xs aspect-[3/2] overflow-hidden rounded-lg"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
