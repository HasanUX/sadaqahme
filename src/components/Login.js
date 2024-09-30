import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState(() => {
    const localData = localStorage.getItem("Email");
    const initialValue = JSON.parse(localData);
    return initialValue || "";
  });
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  });

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(Email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (auth) {
      auth.signOut();
      navigate("/login");
    }
  };

  //    var mail = auth.currentUser.email;
  //    var name = mail.substring(0, mail.lastIndexOf("@"));

  return (
    <div className="login">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 col-12 mx-auto login__reg-form">
            <div className="login__card-two shadow">
              <h2 className="text-center fw-bolder mb-5">Log in</h2>
              <h6 className="text-left fw-bold">
                Want to get notified about projects?
              </h6>

              <span className="text-left text-primary small">
                Just get registered with your mail.
              </span>

              {!handleAuth && <span>Successfully logged out.</span>}

              <form className="login__form-div login__form-login" action="">
                <div className="login__user-name mt-4">
                  <label className="form-label">Email</label>
                  <input
                    type="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="login__user-name mt-4">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label className="form-check-label">
                      We don't receive any money, agree?
                    </label>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <button
                    className="btn btn-light border"
                    type="submit"
                    onClick={signIn}
                  >
                    Sign in
                  </button>

                  <button className="btn btn-primary ms-2" onClick={register}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
