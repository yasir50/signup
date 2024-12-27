import img from "../assets/img.png";

export default function Signup() {
  return (
    <>
      <div className="container">
          <div>
            <div className="signUp">Sign Up</div>
            <div className="already">Already have account? Login here</div>
            <div className="fields">
              Name
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Enter your Name here</label>
              </div>
            </div>
            <div className="fields">
              Email id
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Enter your email id here</label>
              </div>
            </div>
            <div className="fields">
              Password
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Enter your password here</label>
              </div>
            </div>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />

                <label class="form-check-label" for="flexCheckChecked">
                  By Signing up you agree to recieve updates and special Offers.
                </label>
              </div>
            </div>
            <div className="btn">
              <button>Submit</button>
            </div>
          </div>
          <div>
            <div className="img">
              <img src={img} alt="..." />
            </div>
          </div>
      </div>
    </>
  );
}
