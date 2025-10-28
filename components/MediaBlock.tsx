interface MediaBlockProps {
  children: React.ReactNode;
  className?: string;
}

const MediaBlock: React.FC<MediaBlockProps> = ({ children, className = '' }) => (
  <div className={`mx-auto w-full pb-5 ${className}`}>{children}</div>
);

export default MediaBlock;
