import NextLink from "next/link";

import { api } from "@/trpc/server";
import { Box, Grid, Typography, Link, Paper } from "@mui/material";

export default async function Home() {
  return (
    <main>
      <Box textAlign={"center"} my={8}>
        <Typography component="h1" variant="h3">
          Fanvue&apos;s Fullstack coding challenge
        </Typography>
      </Box>
      <Grid container spacing={1}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NextLink href="/feed" passHref>
            <Paper
              sx={{
                textAlign: "center",
                border: "1px solid grey",
                borderRadius: 5,
                p: 3,
              }}
              elevation={3}
            >
              <h2>Go to Feed page</h2>
              <p>And start the first task</p>
            </Paper>
          </NextLink>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NextLink href="/vault" passHref>
            <Paper
              sx={{
                textAlign: "center",
                border: "1px solid grey",
                borderRadius: 5,
                p: 3,
              }}
              elevation={3}
            >
              <h2>Go to Vault page</h2>
              <p>And start the second task</p>
            </Paper>
          </NextLink>
        </Grid>
      </Grid>
    </main>
  );
}
