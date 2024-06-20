import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  comments: publicProcedure
    .input(
      z.object({
        postId: z.number(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const comments = (await fetch(
        `https://jsonplaceholder.typicode.com/posts/${input.postId}/comments`,
      ).then((res) => res.json())) as {
        id: number;
        body: string;
        name: string;
        email: string;
      }[];

      return comments;
    }),
});
