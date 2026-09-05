import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../index.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Terminal — Vivek Indlebele Narasimha Prasad" },
      {
        name: "description",
        content:
          "Explore Vivek Indlebele Narasimha Prasad's work, experience, and links through an interactive terminal.",
      },
      {
        property: "og:title",
        content: "Terminal — Vivek Indlebele Narasimha Prasad",
      },
      {
        property: "og:description",
        content:
          "Explore Vivek Indlebele Narasimha Prasad's work, experience, and links through an interactive terminal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://terminal.viveks.app" },
      { property: "og:image", content: "https://viveks.app/social-card.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://terminal.viveks.app" },
    ],
  }),
  component: () => <Outlet />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
