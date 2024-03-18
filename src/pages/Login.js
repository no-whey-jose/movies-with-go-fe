import { useState } from "react";
import Layout from "./Layout";
import Input from "../components/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
          <input type="submit " className="btn btn-primary" value="login" />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
