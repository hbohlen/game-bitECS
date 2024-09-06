import React from "react";
import ReactDOM from "react-dom";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter(routeTree);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
