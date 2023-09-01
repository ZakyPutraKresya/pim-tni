import { useState, useEffect } from 'react';
import styles from '@/styles/Main.module.scss';
import Head from "next/head";
import bg from '@/public/img/jpg/bg-login-pusinfomar.jpg';
import LoginForm from "@/components/LoginForm";
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const router = useRouter();

  useEffect(() => {
    // Lakukan pengalihan (redirect) jika pengguna membuka "/admin"
    if (router.pathname === '/auth/login') {
      router.push('/login');
    }
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME} - Login</title>
        <link rel="icon" href="/img/svg/logo.svg" />
      </Head>
      <div className={styles.LoginBody}
        style={{
          backgroundImage: `url(${bg.src})`
        }}>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
