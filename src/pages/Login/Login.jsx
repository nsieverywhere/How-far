import { React, useState } from "react";
import "./styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Btn } from "../../components/Button1";
import { Input } from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handler = async (event) => {
    event.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/signin", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data == "user does not exist") {
            setInfo("user does not exist");

            window.setTimeout(() => {
              setInfo("");
            }, 1000);
          } else if (response.data == "password is incorrect.") {
            setInfo("password is incorrect.");
            window.setTimeout(() => {
              setInfo("");
            }, 1000);
          } else {
            setInfo("Singing in...");
            navigate("/profile");

            window.setTimeout(() => {
              setInfo("");
            }, 1000);
          }
          // setInfo(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row outer">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 inputsection">
          <h2>How far? Sign in...</h2>
          <form onSubmit={handler}>
            <div class="form-group">
              <small class="form-text text-muted">Email Address</small>
              <Input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <small class="form-text text-muted ">Password</small>
              <Input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small class="form-text text-muted">
                <Link to="/reset-password">Forgot your password?</Link>
              </small>
              <br />
              <small class="form-text text-muted">
                Don't have an account yet? <Link to="/signup">Sign Up</Link>
              </small>
            </div>
            <br />

            <Btn primary type="submit">
              Sign in
            </Btn>
            <p>{info}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
