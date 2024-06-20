"use client";

import { api } from "@/trpc/react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useState } from "react";

export function PostCard(props: { id: number; title: string; body: string }) {
  const comments = api.post.comments.useQuery({
    postId: props.id,
  });

  const isLoading = comments.isLoading;

  const commentCount = comments.data?.length ?? null;

  const [showComments, setShowComments] = useState(false);

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>

        <Typography variant="caption">Id: {props.id}</Typography>
        <Typography variant="body2" color="text.secondary">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        {
          // If loading or we know we have something to display, show the toggle button. If loading is finished and we see we have 0 comments, display nothing.
          (comments.isLoading || comments.data?.length) && (
            <Button size="small" onClick={() => setShowComments(!showComments)}>
              {isLoading ? "Loading" : showComments ? "Hide" : "Show"} comments{" "}
              {commentCount}
            </Button>
          )
        }
      </CardActions>
      {showComments && (
        <div className="flex flex-col gap-2 px-4">
          {comments.data!.map((comment) => (
            // <Card key={comment.id}>
            //   <CardContent>
            //     <Typography variant="body2">{comment.body}</Typography>
            //   </CardContent>
            // </Card>
            <Comment
              key={comment.id}
              id={comment.id}
              body={comment.body}
              name={comment.name}
              email={comment.email}
            />
          ))}
        </div>
      )}
    </Card>
  );
}

// A quick little CHAT GPT creation using
/*
Using Material UI and this typescript type {
id: number;
title: string;
body: string;
name: string;
email: string;
}[];

Create a React Comment component that I can paste in 
*/
// "https://chatgpt.com/share/59ec7a14-2b70-499e-9c39-2019d05b49e8"
function Comment(props: {
  id: number;
  body: string;
  name: string;
  email: string;
}) {
  return (
    <Card key={props.id} style={{ marginBottom: "16px" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{props.name[0]}</Avatar>}
        title={props.name}
        subheader={props.email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

// V1 used Paper, V2 above uses Card
// export function PostCard(props: { id: number; title: string; body: string }) {
//   const comments = api.post.comments.useQuery({
//     postId: props.id,
//   });

//   const commentCount = comments.data?.length ?? null;

//   const [showComments, setShowComments] = useState(false);

//   return (
//     <Paper elevation={3}>
//       <Typography variant="h4">{props.title}</Typography>
//       <Typography variant="caption">Id: {props.id}</Typography>

//       <Typography variant="body1">{props.body}</Typography>
//       {(comments.isLoading || comments.data?.length) && (
//         <>
//           <Typography variant="h6">
//             Comments
//             <LoadingButton
//               variant="text"
//               onClick={() => setShowComments(!showComments)}
//               loading={comments.isLoading}
//             >
//               {commentCount}
//             </LoadingButton>
//           </Typography>
//           {showComments && (
//             <div>
//               {comments.isLoading && <p>Loading comments...</p>}
//               {comments.data?.map((comment) => (
//                 <div key={comment.id}>
//                   <Typography variant="body2">{comment.body}</Typography>
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       )}
//     </Paper>
//   );
// }
