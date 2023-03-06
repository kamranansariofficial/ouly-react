import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
// layouts
// import MainLayout from '../layouts/main';
import { LoadingScreen } from "components";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { pathname } = useLocation();
  // const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import("pages/auth/login")));
const SignUp = Loadable(lazy(() => import("pages/auth/signup")));
