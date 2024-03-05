import { createBrowserRouter } from "react-router-dom";
import CharacterListPage from "../components/CharacterListPage";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CharacterListPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
