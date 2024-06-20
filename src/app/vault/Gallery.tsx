"use client";

import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export function Gallery(props: {
  allPhotos: { id: number; title: string; url: string }[];
}) {
  const [photosPaginationIndex, setPhotosPaginationIndex] = useState(0);

  const photosToDisplay = useMemo(() => {
    return props.allPhotos.slice(
      photosPaginationIndex,
      photosPaginationIndex + 6,
    );
  }, [photosPaginationIndex, props.allPhotos]);

  // Could have used Mui Image List here, but it was not really part of the task, and the photo data does not have src sets anyway https://mui.com/material-ui/react-image-list/
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {photosToDisplay.map((photo) => (
          <div key={photo.id}>
            <Link
              href={`/vault/${photo.id}?photoUrl=${photo.url}`}
              target="_blank"
            >
              <Image
                src={photo.url}
                alt={photo.title}
                className="h-auto w-full"
                width={200}
                height={200}
              />
              <Typography variant="body2">{photo.title}</Typography>
            </Link>
          </div>
        ))}
      </div>
      <div>
        Displaying photos {photosPaginationIndex + 1} to{" "}
        {photosPaginationIndex + 6}{" "}
      </div>
      <Button
        disabled={photosPaginationIndex === 0}
        onClick={() => setPhotosPaginationIndex(photosPaginationIndex - 6)}
      >
        Back
      </Button>
      <Button
        disabled={photosPaginationIndex > 5000}
        onClick={() => setPhotosPaginationIndex(photosPaginationIndex + 6)}
      >
        Next
      </Button>
    </div>
  );
}
