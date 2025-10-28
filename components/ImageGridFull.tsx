import Image from 'next/image'

export function ImageGridFull({ singleImage }: { singleImage: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2">
      {singleImage.map(({ src, alt }, i) => (
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
