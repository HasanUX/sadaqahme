import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Showcase = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [state, setstate] = useState(() => {
  //   const localData = localStorage.getItem("Email");
  //   const initialValue = JSON.parse(localData);
  //   return initialValue || "";
  // });
  // useEffect(() => {
  //   localStorage.setItem("Email", JSON.stringify(Email), [Email]);
  // });

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User logged in");
    } else {
      console.log("User logged out");
    }
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

  // var mail = auth.user?.email;
  // var name = mail.substring(0, mail.lastIndexOf("@"));

  return (
    <div className="showcase">
      {/*<div className="col-md-12 col-12 showcase__content">
            <h5 className="scroll-down">View Projects</h5>
          </div>*/}

      <div className="showcase__reg-form">
        <div className="showcase__card-two shadow">
          <h6 className="text-left fw-bold text-dark">
            {auth.currentUser
              ? `Assalamu 'alaikum, logged in as ${auth.currentUser.email}`
              : "Want to get notified about projects?"}
          </h6>

          <span className="text-left text-primary small">
            {auth.currentUser
              ? "From now, you will get project's update to your mail."
              : "Just get registered with your mail."}
          </span>

          {auth.currentUser && (
            <div className="d-flex mt-5">
              <button
                onClick={handleAuth}
                className="btn btn-default text-danger me-2"
              >
                Log out
              </button>

              <Link to="/projects">
                <button className="btn btn-dark">See projects</button>
              </Link>
            </div>
          )}

          {!handleAuth && <span>Successfully logged out.</span>}

          <form className="showcase__form-div" action="">
            <div
              className={auth.currentUser ? "d-none" : "showcase__user-name"}
            >
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
            <div
              className={auth.currentUser ? "d-none" : "showcase__user-name"}
            >
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  aria-describedby="inputGroupPrepend2"
                  placeholder="**********"
                  required
                />
              </div>
            </div>
            <div className={auth.currentUser ? "d-none" : "col-md-12 mt-4"}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck2"
                  required
                />

                <label className="form-check-label text-dark">
                  We don't receive any money, agree?
                </label>
              </div>
            </div>
            <div className="col-md-12 col-12 mt-3">
              {/* <Link to={!auth && "/"}></Link> */}

              <button
                className={auth.currentUser ? "d-none" : "btn btn-light border"}
                type="submit"
                onClick={signIn}
              >
                Sign in
              </button>

              <button
                className={auth.currentUser ? "d-none" : "btn btn-primary ms-2"}
                onClick={register}
              >
                Register
              </button>
            </div>
          </form>
        </div>

        {/*<div className="showcase__daily-hadith">
          <div className="showcase__card-one">
            <h6>Reminder from Quran - </h6>
            <h5>
              Those who spend their wealth in charity day and night, secretly
              and openly—their reward is with their Lord, and there will be no
              fear for them, nor will they grieve.(2:274)
            </h5>
            <h6 className="mt-4">Reminder from Hadith - </h6>
            <h5>
              "Sadaqah extinguishes sin as water extinguishes fire,” (Hadith,
              Tirmidhi).
            </h5>
          </div>
        </div>*/}
      </div>

      {/*<div className="col-md-4 col-12 showcase__daily-hadith">
            <div className="showcase__card-one">
              <h6>Reminder from Quran - </h6>
              <h5>
                Those who spend their wealth in charity day and night, secretly
                and openly—their reward is with their Lord, and there will be no
                fear for them, nor will they grieve.(2:274)
              </h5>
              <h6 className="mt-4">Reminder from Hadith - </h6>
              <h5>
                "Sadaqah extinguishes sin as water extinguishes fire,” (Hadith,
                Tirmidhi).
              </h5>
            </div>
          </div>*/}
    </div>
  );
};

export default Showcase;
