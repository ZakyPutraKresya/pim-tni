import { useState, useEffect } from 'react';
import styles from '@/styles/Main.module.scss';
import Head from "next/head";
import bg from '@/public/img/jpg/bg-login-pusinfomar.jpg';
import LoginForm from "@/components/LoginForm";
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

export const getServerSideProps = async (context) => {
  const { req, res } = context;

  // Check for the token in the request headers or cookies
  const token = req.headers['authorization'] || req.cookies['token'];

  if (token) {
    // Redirect to the root path
    res.writeHead(302, { Location: '/admin' });
    res.end();
  }

  return { props: {} };
};

export default Login;
