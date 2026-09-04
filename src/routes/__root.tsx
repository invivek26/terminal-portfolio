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
      { title: "Vivek's Terminal Portfolio" },
      {
        name: "description",
        content:
          "Explore Vivek's projects, experience, and links through an interactive terminal.",
      },
      { property: "og:title", content: "Vivek's Terminal Portfolio" },
      {
        property: "og:description",
        content:
          "Explore Vivek's projects, experience, and links through an interactive terminal.",
      },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [{ rel: "icon", href: "/favicon.ico" }],
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
