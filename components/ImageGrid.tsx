import Image from 'next/image'

export function ImageGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {images.map(({ src, alt }, i) => (
        <div key={i} className="w-full">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  )
}
