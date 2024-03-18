import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [jwt, setJwt] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alertClassname, setAlertClassname] = useState("d-none");

  const navigate = useNavigate();

  const handleLogout = () => {
    setJwt("");
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Movies with Go!</h1>
        </div>
        <div className="col text-end">
          {jwt === "" ? (
            <Link to="/login">
              <span className="badge bg-success">Login</span>
            </Link>
          ) : (
            <a href="#!" onClick={handleLogout}>
              <span className="badge bg-light text-dark">Logout</span>
            </a>
          )}
        </div>
        <hr className="md-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link
                to="/movies"
                className="list-group-item list-group-item-action"
              >
                Movies
              </Link>
              <Link
                to="/genres"
                className="list-group-item list-group-item-action"
              >
                Genres
              </Link>
              {jwt !== "" && (
                <>
                  <Link
                    to="/admin/movie/0"
                    className="list-group-item list-group-item-action"
                  >
                    Add Movie
                  </Link>
                  <Link
                    to="/admin"
                    className="list-group-item list-group-item-action"
                  >
                    Manage Catalog
                  </Link>
                  <Link
                    to="/graphql"
                    className="list-group-item list-group-item-action"
                  >
                    GraphQL
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert message={alertMsg} classname={alertClassname} />
          <Outlet context={{ jwt, setJwt, setAlertClassname, setAlertMsg }} />
        </div>
      </div>
    </div>
  );
}

export default App;
