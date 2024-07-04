// Libraries
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard.tsx";
import Error from "./pages/Error.tsx";

// Layouts
import Main, { mainLoader } from "./layouts/Main.tsx";

// Actions
import { logoutAction } from "./actions/logout.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};
export default App;
