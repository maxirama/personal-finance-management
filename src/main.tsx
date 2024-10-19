import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home.tsx";
import { Budget } from "./pages/Budget.tsx";
import { Pots } from "./pages/Pots.tsx";
import { RecurringBills } from "./pages/RecurringBills.tsx";
import { Transactions } from "./pages/Transactions.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/Budget", element: <Budget /> },
  {
    path: "/Pots",
    element: <Pots />,
  },
  {
    path: "/RecurringBills",
    element: <RecurringBills />,
  },
  {
    path: "/Transactions",
    element: <Transactions />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
