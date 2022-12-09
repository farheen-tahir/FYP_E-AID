import "./FormStyles.css";
import { Link } from "react-router-dom";
import { FormItems } from "./FormItems";

function Form() {
  return (
    <>
      <div class="main">
        <div class="containorupper">
          <div class="inner">
            <p>Login To Coninue</p>
            <Link to="/">
              <i class="fa-solid fa-xmark"></i>
            </Link>
          </div>
          <div class="mainheading">
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="left">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="State" />
            <div className="left-inner">
              <select id="sign-as" name="sign-as" className="field">
                <option disabled="disabled" selected="selected">
                  Register As.
                </option>
                <option value="donor">Recepient</option>
                <option value="recepient">Donor</option>
              </select>
              <input type="text" className="field" placeholder="Phone" />
            </div>
            <p>
              By signing up you are agree to our terms and use and privacy
              policy.
            </p>
            <button className="btnlogin">Create an account</button>
          </form>
        </div>
        <div className="seperator">
          <span></span>
        </div>
        <div className="sep">
          <span></span>
        </div>
        <div className="right">
          {/* <!-- <div class="card-body"> --> */}
          {FormItems.map((item, index) => {
            return (
              <a
                key={index}
                className={item.cName}
                href={item.url}
                role="button"
              >
                <i className={item.icon}></i>
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Form;
