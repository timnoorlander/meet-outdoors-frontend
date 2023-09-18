import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { MapView } from "@/features/MapView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <MapView /> }],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
