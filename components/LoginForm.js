import styles from "@/styles/Main.module.scss";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { IoMdLock } from "react-icons/io";
import { useEffect, useState, useRef } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState([{ username: "", password: "" }]);

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
    setError("");
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
    setError("");
  };

  const processLogin = async (username, password) => {
    try {
      const [success, message] = await login(username, password);
      if (success) {
        setError("");
        router.push("/");
      } else {
        setError(message);
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred during login");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleLoginFormSubmit = e => {
    e.preventDefault();
    let errors = {};
    if (username.length === 0) errors["username"] = "Required";
    if (password.length === 0) errors["password"] = "Required";

    if (errors !== {}) {
      setErrors(errors);
      console.log(errors);
    }

    if ((username.length && password.length) !== 0) {
      setErrors({ username: "", password: "" });
      processLogin(username, password);
    }
  };

  // useEffect(() => {
  //   inputFocus.current.focus();
  // }, []);

  return (
    <div className={styles.LoginFormContainer}>
      <Image
        src="/img/png/logopusin.png"
        width={125}
        height={125}
        alt="Login Image"
        className="mx-auto"
      />
      <p className="text-center mt-2 mb-5 text-white font-semibold">Login</p>
      <form >
        <div className="relative">
          <FaUserAlt
            className={`absolute top-2 left-2 text-xs ${
              isUsernameFocused ? "text-blue-600" : "text-white"
            }`}
          />
          <input
            className={`focus:bg-white focus:text-black w-full p-1 pl-7 mb-1 ${styles.LoginForm}`}
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        {errors.username && (
          <div className="text-white mb-3 font-semibold">{errors.username}</div>
        )}

        <div className="relative">
          <IoMdLock
            className={`text-white absolute top-[7px] left-[6px] ${
              isPasswordFocused ? "text-blue-600" : "text-white"
            }`}
          />

          <input
            className={`focus:bg-white focus:text-black w-full p-1 pl-7 mb-1 ${styles.LoginForm}`}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={e => e.preventDefault()}
            className="absolute right-2 top-0"
          >
            {showPassword ? (
              <FaEyeSlash
                className={isPasswordFocused ? "text-blue-500" : "text-white"}
              />
            ) : (
              <FaEye
                className={isPasswordFocused ? "text-blue-500" : "text-white"}
              />
            )}
          </button>
        </div>
        {errors.password && (
          <div className="text-white mb-3 font-semibold">{errors.password}</div>
        )}
        {error && <div className="text-white font-semibold">{error}</div>}

        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
