import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";

//layouts
import Main,{mainLoader} from "./layouts/Main";

import Error from "./pages/Error";


//actions
import {logoutAction} from './actions/logout'


// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction
      }
    ],
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
