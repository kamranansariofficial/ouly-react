import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
// layouts
import { Layout } from "layout";
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
    {
      path: "",
      element: <Layout />,
      children: [
        { element: <Navigate to="/dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "product", element: <MyProduct /> },
        { path: "edit-product", element: <EditProduct /> },
        { path: "customer-information", element: <CustomerInformation /> },
        { path: "advantages-product", element: <AdvantagesProduct /> },
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import("pages/auth/login")));
const SignUp = Loadable(lazy(() => import("pages/auth/signup")));
const Dashboard = Loadable(lazy(() => import("pages/dashboard")));
const MyProduct = Loadable(lazy(() => import("pages/dashboard/product")));
const EditProduct = Loadable(lazy(() => import("pages/dashboard/editProduct")));
const AdvantagesProduct = Loadable(
  lazy(() => import("pages/dashboard/advantagesProduct"))
);
const CustomerInformation = Loadable(
  lazy(() => import("pages/dashboard/customerInformation"))
);
