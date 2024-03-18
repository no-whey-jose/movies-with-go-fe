import { useRouteError } from "react-router-dom";
import Layout from "./Layout";

const ErrorDisplay = () => {
  const error = useRouteError();
  return (
    <Layout title="Something Went Wrong!">
      <div className="col-md-6 offset-md-3">
        <p>An unexpected error has occurred</p>
        <p>
          <em>{error.statusText || error.message}</em>
        </p>
      </div>
    </Layout>
  );
};

export default ErrorDisplay;
