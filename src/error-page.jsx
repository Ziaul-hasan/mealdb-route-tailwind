import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center my-28">
      <h1 className="text-5xl font-bold my-5">Oops!</h1>
      <p className="text-2xl font-medium">Sorry, an unexpected error has occurred.</p>
      <p>
        <span className="block text-xl font-medium my-5">Error: 404</span>
        <span className="block text-3xl text-center">&#128514;</span>
        <i className="text-xl ">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}