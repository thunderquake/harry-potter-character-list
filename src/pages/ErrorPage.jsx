import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className=" flex flex-col justify-center items-center bg-harrypotterbrown min-h-svh"
    >
      <p className="text-white text-4xl font-bold">Oops!</p>
      <p className="text-white">Sorry, an unexpected error has occurred.</p>
      <p className="text-dun">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
