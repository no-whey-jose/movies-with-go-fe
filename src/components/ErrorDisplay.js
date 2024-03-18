import { useRouteError } from "react-router-dom";

const ErrorDisplay = () => {
  const error = useRouteError();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3">Something Went Wrong!</h1>
          <p>An unexpected error has occurred</p>
          <p>
            <em>{error.statusText || error.message}</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
