import { useState } from "react";
import Layout from "./Layout";
import Input from "../components/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwt } = useOutletContext();
  const { setAlertClassname } = useOutletContext();
  const { setAlertMsg } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email", email);
    console.log("password", password);

    if (email === "test@test.org") {
      setJwt("authorized");
      setAlertClassname("d-none");
      setAlertMsg("");
      navigate("/");
    } else {
      setAlertClassname("alert-danger");
      setAlertMsg("Invalid Credentials");
    }
  };

  return (
    <Layout title="Login">
      <div className="col-md-6 offset-md-3">
        <form onSubmit={handleSubmit}>
          <Input
            title="Email Address"
            type="email"
            classname="form-control"
            name="email"
            autoComplete="email-new"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            title="Password"
            type="password"
            classname="form-control"
            name="password"
            autoComplete="password-new"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <hr />
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
