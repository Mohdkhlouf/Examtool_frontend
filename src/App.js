import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//pages
import Home from "./pages/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout.jsx";
import Contactus from "./pages/Contactus/Contactus.jsx";
import Aboutus from "./pages/Aboutus/Aboutus.jsx";
import ExamPage from "./pages/ExamPage/ExamPage.jsx";
import AdminPage from "./admin/Admin.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "contactus", element: <Contactus /> },
      { path: "aboutus", element: <Aboutus /> },
      { path: "exampage", element: <ExamPage /> },
      { path: "adminpage", element: <AdminPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
