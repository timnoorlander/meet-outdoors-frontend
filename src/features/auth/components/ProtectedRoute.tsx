import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "../providers";

type Props = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: Props) {
  const location = useLocation();
  const { isAuthenticated } = useAuthentication();

  console.log({ isAuthenticated });

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={`/login?redirectTo=${location.pathname}`}
      ></Navigate>
    );
  }

  return children;
}
