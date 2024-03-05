import { createBrowserRouter } from "react-router-dom";
import CharacterListPage from "../components/CharacterListPage";
import ErrorPage from "../components/ErrorPage";
import NotFoundPage from "../components/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CharacterListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
