import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";
import { CreateActivity } from "./CreateActivity";

export const activitiesRoutes = [
  {
    path: "create-new-activity",
    element: (
      <ProtectedRoute>
        <CreateActivity />
      </ProtectedRoute>
    ),
  },
];
