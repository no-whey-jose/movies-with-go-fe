import { useCallback, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./components/Alert";
import { Authenticate } from "./api/Authenticate";

function App() {
  const [jwt, setJwt] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alertClassname, setAlertClassname] = useState("d-none");
  const [tickInterval, setTickInterval] = useState();

  const toggleRefresh = useCallback(
    (status) => {
      if (status) {
        let i = setInterval(async () => {
          try {
            const data = await Authenticate.RefreshToken();
            if (data.access_token) {
              setJwt(data.access_token);
            }
          } catch (error) {
            console.log("user is not logged in", error);
          }
        }, 600000);
        setTickInterval(i);
      } else {
        setTickInterval(null);
        clearInterval(tickInterval);
      }
    },
    [tickInterval]
  );

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const data = await Authenticate.RefreshToken();
        if (data.access_token) {
          setJwt(data.access_token);
          toggleRefresh(true);
        }
      } catch (error) {
        console.log("user is not logged in", error);
      }
    };

    if (jwt === "") {
      refreshToken();
    }
  }, [jwt, toggleRefresh]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await Authenticate.ClearToken()
      .catch((error) => console.log("Error logging out", error))
      .finally(() => {
        setJwt("");
        toggleRefresh(false);
      });
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
          <Outlet
            context={{
              jwt,
              setJwt,
              setAlertClassname,
              setAlertMsg,
              toggleRefresh,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
