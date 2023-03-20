import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
// layouts
import { DashboardLayout, EditLayout } from "layout";
import { LoadingScreen } from "components";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { pathname } = useLocation();
  // const isDashboard = pathname.includes("/dashboard");

  return (
    // fallback={<LoadingScreen />}
    <Suspense>
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
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard" replace /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/product", element: <MyProduct /> },
        { path: "/edit-product", element: <AddProduct /> },
        { path: "/customer-information", element: <CustomerInformation /> },
        { path: "/advantages-product", element: <AdvantagesProduct /> },
      ],
    },
    {
      path: "editing",
      element: <EditLayout />,
      children: [
        { path: "", element: <SearchResultPage /> },
        { path: "edit-page", element: <EditPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import("pages/auth/login")));
const SignUp = Loadable(lazy(() => import("pages/auth/signup")));
const Dashboard = Loadable(lazy(() => import("pages")));
const SearchResultPage = Loadable(lazy(() => import("pages/searchResultPage")));
const MyProduct = Loadable(lazy(() => import("pages/productInformation")));
const AddProduct = Loadable(lazy(() => import("pages/addProduct")));
const EditPage = Loadable(lazy(() => import("pages/editPage")));
const AdvantagesProduct = Loadable(
  lazy(() => import("pages/advantagesProduct"))
);
const CustomerInformation = Loadable(
  lazy(() => import("pages/customerInformation"))
);
const NotFound = Loadable(lazy(() => import("pages/notFound")));
