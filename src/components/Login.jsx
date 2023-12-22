import "./Login.css";
import imgUrl from "../assets/logo.png";

const Login = () => {
  function validateForm() {
    // Email validation
    var usernameInput = document.getElementById("username");
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(usernameInput.value)) {
      alert("Please enter a valid email address");
      return;
    }

    // Password validation
    var passwordInput = document.getElementById("password");
    var passwordRegex = /^(?=.*?[A-Z])(?=.*?\d)(?=.*?@)[a-zA-Z0-9@]+$/;
    if (!passwordRegex.test(passwordInput.value)) {
      alert(
        "Password must contain an uppercase letter, a number, and should not contain special characters other than @"
      );
      return;
    }

    // If both validations pass, you can proceed with further actions (e.g., form submission)
    if (passwordInput.value == "SmartServTest@123") {
      console.log("Redirect");
    }
    alert("Login successful!");
  }

  function forgotAction() {
    var usernameInput = document.getElementById("username");
    var email = usernameInput.value;
    if (email.length == 0) {
      alert("Please enter a valid email address");
    } else {
      window.open(
        `mailto:support@smartserv.io?subject=Password Reset&body=Request For Change Of Password From ${email}`
      );
    }
  }
  return (
    <div className="flex justify-center items-center h-screen w-full m-0;">
      <center>
        <div className="bg-[#141414] px-12 py-8 rounded-xl text-center w-full mx-auto ">
          <center>
            <img src={imgUrl} className="mx-4 my-4 rounded-lg" />
          </center>
          <form id="loginForm">
            <input
              className="px-2 py-2 w-full rounded-lg my-4"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required=""
            />
            <input
              className="px-2 py-2 w-full rounded-lg my-4"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required=""
            />
            <button
              type="button"
              className="bg-lime-400 text-white mt-4 px-4 py-2 rounded-lg w-full"
              onClick={validateForm}
            >
              Login
            </button>
          </form>
          <div
            className="my-6 text-gray-400 mt-8 underline"
            onClick={forgotAction}
          >
            <a href="#">Forgot your password ?</a>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;
