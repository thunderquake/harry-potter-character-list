import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="notfound-page"
      className=" flex flex-col justify-center items-center bg-harrypotterbrown min-h-svh"
    >
      <p className="text-white text-4xl font-bold">Whoopsie!</p>
      <p className="text-white">
        The page you&apos;re looking for can&apos;t be found.
      </p>
    </div>
  );
};

export default NotFoundPage;
