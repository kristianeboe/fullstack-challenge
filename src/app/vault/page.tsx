import { Typography } from "@mui/material";
import Image from "next/image";
import { Gallery } from "./Gallery";

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
