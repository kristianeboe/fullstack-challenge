"use client";

import { api } from "@/trpc/react";
import { Button, Paper, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useState } from "react";

export function PostCard(props: { id: number; title: string; body: string }) {
  const comments = api.post.comments.useQuery({
    postId: props.id,
  });

  const commentCount = comments.data?.length ?? null;

  const [showComments, setShowComments] = useState(false);

  return (
    <Paper>
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="caption">Id: {props.id}</Typography>

      <Typography variant="body1">{props.body}</Typography>
      {(comments.isLoading || comments.data?.length) && (
        <>
          <Typography variant="h6">
            Comments
            <LoadingButton
              variant="text"
              onClick={() => setShowComments(!showComments)}
              loading={comments.isLoading}
            >
              {commentCount}
            </LoadingButton>
          </Typography>
          {showComments && (
            <div>
              {comments.isLoading && <p>Loading comments...</p>}
              {comments.data?.map((comment) => (
                <div key={comment.id}>
                  <Typography variant="body2">{comment.body}</Typography>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </Paper>
  );
}
