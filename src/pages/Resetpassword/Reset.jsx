import { React, useState } from "react";
import "./styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Btn } from "../../components/Button1";
import { Input } from "../../components/Input";
import axios from "axios";

function Reset() {
  const [email, setEmail] = useState("");

  const handler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/reset", {
        email: email,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row outer">
        <div className="col-lg-6">1</div>
        <div className="col-lg-6 inputsection">
          <h2>Did you forget your password?</h2>
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
            <br />
            <Btn primary type="submit">
              Reset Password
            </Btn>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
