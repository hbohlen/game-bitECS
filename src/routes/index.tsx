import { createFileRoute } from "@tanstack/react-router";
import { Game } from "../views/Game";

export const Route = createFileRoute("/")({
  component: Game,
});
