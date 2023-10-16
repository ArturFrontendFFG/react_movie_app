import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./assets/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./providers/AuthProvider.jsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 5,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
  </QueryClientProvider>
);
