"use client";

type GoogleDriveEmbedProps = {
  fileId: string;
  title?: string;
};

const GoogleDriveEmbed = ({ fileId, title = "Google Drive Video" }: GoogleDriveEmbedProps) => {
  return (
    <div className="relative w-full pt-[56.25%]">
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        allow="autoplay"
        allowFullScreen
        title={title}
        className="absolute top-0 left-0 w-full h-full border-none"
      ></iframe>
    </div>
  );
};

export default GoogleDriveEmbed;
