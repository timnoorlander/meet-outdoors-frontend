import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Map } from "@/features/views";
import { activitiesRoutes } from "@/features/activities/routes";
import { authRoutes } from "@/features/auth/routes";
import { GenericError } from "@/components/layout/GenericError";
import { ErrorBoundary } from "@/components/elements/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <GenericError />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <Map />
          </ErrorBoundary>
        ),
      },
      ...authRoutes,
      ...activitiesRoutes,
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
