import { type Metadata } from "next";

// Generates dynamic metadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export function generateMetadata(props: {
  params: {
    photoId: string;
  };
  searchParams: Record<string, string>;
}): Metadata {
  return {
    title: `${props.params.photoId} Photo | Fanvue Fullstack coding challenge`,
    description: `A full page view of photo id ${props.params.photoId} with url ${props.searchParams.photoUrl}`,
    openGraph: {
      images: [props.searchParams.photoUrl!],
    },
  };
}

export default function PhotoFullscreenPage(props: {
  params: {
    photoId: string;
  };
  searchParams: Record<string, string>;
}) {
  const photoUrl = props.searchParams.photoUrl;

  if (!photoUrl) {
    return <div>No photo URL provided</div>;
  }

  // Experienced some weird gateway timeouts and general slowness when loading the pictures, but I think that has to do with the source, not this code implementation

  return (
    <div>
      <img
        src={photoUrl}
        height={600}
        width={600}
        alt={`Photo id: ${props.params.photoId}`}
      />
    </div>
  );
}
