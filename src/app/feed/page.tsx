import { Typography } from "@mui/material";
import { PostCard } from "./PostCard";

export default async function FeedPage() {
  const posts = (await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  )) as { id: number; title: string; body: string }[];

  return (
    <div>
      <div className="container mx-auto flex flex-col gap-5 ">
        <Typography variant="h1" className="text-center">
          Feed
        </Typography>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}
