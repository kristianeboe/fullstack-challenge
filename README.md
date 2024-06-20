# Fanvue's Fullstack challenge

## What I did?

1. Cloned this repo to my machine https://github.com/fanvue/fullstack-challenge
2. In a separate folder used [create-t3-app](https://create.t3.gg/) to create a new project
3. Installed MUI in the new t3 project, and replicated initial page structure from the original repo
4. Implemented the Feed with a server component page for the main feed and posts, and then used TRPC to load the per post comments inside each PostCard component. With more time I would have used an Intersection Observer to load comments as the user scrolls down the page.
5. Implemented the vault. Decided to load all 5k photos serverside 😅, but implemented a simple client side pagination/view to not overwhelm the browser with displaying all images at once.
6. Considered implementing a MUI modal / lightbox for the images, but decided to just open a link to a new tab to display the image there instead.
7. Added the favicon
8. Added metatags for title and description for all pages

## What would I have done with more time?

1. More styling, at least more MUI components. I'm not a designer, but I can make things look good enough :)
