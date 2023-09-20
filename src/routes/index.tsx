import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Map } from "@/features/map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Map /> }],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
