import { createFileRoute } from "@tanstack/react-router";
import Terminal from "../components/Terminal";

export const Route = createFileRoute("/")({
  component: Terminal,
});
