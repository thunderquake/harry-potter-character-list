import { createBrowserRouter } from "react-router-dom";
import CharacterListPage from "../pages/CharacterListPage";
import ErrorPage from "../pages/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage";
import CharacterPage from "../pages/CharacterPage";

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
  {
    path: "/character/:slug",
    element: <CharacterPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
