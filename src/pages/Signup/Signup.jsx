import { React, useState, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Btn } from "../../components/Button1";
import { Input } from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [backend, setBackend] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://api.kanye.rest").then((res) => {
      // setBackend(res.data.quote);
    });
  }, []);

  function handler(e) {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:5000/signup", {
          fname,
          lname,
          email,
          username,
          password,
        })
        .then((response) => {
          if (response.data === "Signed up") {
            setSign("You have successfully signed up! Horay!!");

            window.setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            setSign("User already exist");
            window.setTimeout(() => {
              setSign("");
            }, 1000);
          }
        });
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className="container-fluid ">
      <div className="row outer ">
        <div className="col-lg-6 col-md-6">{backend}</div>
        {/*  */}
        <div className="col-lg-6 col-md-6  inputsection">
          <h2>Welcome, Sign Up </h2>
          <form onSubmit={handler}>
            <div className="names">
              <div className="form-group  namefield ">
                <small className="form-text text-muted">First Name</small>
                <Input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter your first name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="form-group  namefield">
                <small className="form-text text-muted">Last Name</small>

                <Input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter your last name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <small className="form-text text-muted">Username</small>
              <Input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <small className="form-text text-muted">Email Address</small>

              <Input
                className="form-control"
                placeholder="Enter email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <small className="form-text text-muted ">Password</small>
              <Input
                className="form-control"
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small className="form-text text-muted">
                Already have an account? <Link to="/">Login</Link>
              </small>
            </div>
            <br />
            <Btn primary type="submit">
              Signup
            </Btn>
            <p>{sign}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
