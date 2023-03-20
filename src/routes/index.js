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
    //
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
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "my-product", element: <MyProduct /> },
        { path: "edit-product", element: <AddProduct /> },
        { path: "customer-information", element: <CustomerInformation /> },
        { path: "advantages-product", element: <AdvantagesProduct /> },
        { path: "product", element: <Product /> },
        { path: "subscription", element: <SubscriptionPlan /> },
        { path: "settings", element: <Settings /> },
        { path: "support", element: <Support /> },
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
const Product = Loadable(lazy(() => import("pages/product")));
const EditPage = Loadable(lazy(() => import("pages/editPage")));
const SubscriptionPlan = Loadable(lazy(() => import("pages/subscriptionPlan")));
const Settings = Loadable(lazy(() => import("pages/settings")));
const Support = Loadable(lazy(() => import("pages/support")));
const AdvantagesProduct = Loadable(
  lazy(() => import("pages/advantagesProduct"))
);
const CustomerInformation = Loadable(
  lazy(() => import("pages/customerInformation"))
);
const NotFound = Loadable(lazy(() => import("pages/notFound")));
