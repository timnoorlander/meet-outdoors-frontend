import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Map } from "@/features/views";
import { activitiesRoutes } from "@/features/activities/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Map /> }, ...activitiesRoutes],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
