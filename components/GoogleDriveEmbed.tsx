"use client";

type GoogleDriveEmbedProps = {
  fileId: string;
  title?: string;
};

const GoogleDriveEmbed = ({ fileId, title = "Google Drive Video" }: GoogleDriveEmbedProps) => {
  return (
    <div className="not-prose relative w-full overflow-hidden pt-[56.25%]">
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        allow="autoplay"
        allowFullScreen
        title={title}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-none"
      ></iframe>
    </div>
  );
};

export default GoogleDriveEmbed;
