import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>This is Home element</h1>,
  },
  {
    path: "/news",
    element: <h1>This is News element</h1>,
  },
  {
    path: "auth",
    element: <h1>This is login element</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
