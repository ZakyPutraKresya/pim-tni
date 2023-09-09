import styles from "@/styles/Main.module.scss";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { IoMdLock } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const cookies = new Cookies();
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL+'auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json(); // Mendapatkan data respons dari server
      if (response.ok) {
        const token = data.token;
        cookies.set("token", token, { maxAge: 60 * 60 * 12 })
        cookies.set("username", data.username, { maxAge: 60 * 60 * 12 })
        router.push("/admin")
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };


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
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <FaUserAlt
            className={`absolute top-2 left-2 text-xs text-white`}
          />
          <input
            className={`focus:bg-white focus:text-black w-full p-1 pl-7 mb-1 ${styles.LoginForm}`}
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* {errors.username && (
          <div className="text-white mb-3 font-semibold">{errors.username}</div>
        )} */}

        <div className="relative">
          <IoMdLock
            className={`text-white absolute top-[7px] left-[6px] text-white`}
          />

          <input
            className={`focus:bg-white focus:text-black w-full p-1 pl-7 mb-1 ${styles.LoginForm}`}
            type={"password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <button className={styles.loginButton} type="submit">
            Login
          </button>
      </form>
    </div>
  );
};

export default LoginForm;
