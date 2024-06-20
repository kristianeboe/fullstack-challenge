import { Typography } from "@mui/material";

import { Gallery } from "./Gallery";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Vault | Fanvue Fullstack coding challenge",
  description:
    "A responsive grid of square images. Clicking on a photo will open it in a fullscreen view.",
};

export default async function VaultPage() {
  const photos = (await fetch(
    "https://jsonplaceholder.typicode.com/photos",
  ).then((res) => res.json())) as {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    albumId: number;
  }[];

  return (
    <div className="container mx-auto">
      <Typography variant="h1" className="text-center">
        Vault
      </Typography>
      <Gallery allPhotos={photos} />
    </div>
  );
}
