import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useState } from 'react';

const cookies = new Cookies()
const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [authorize, setAuthorize] = useState(false)

    useEffect(() => {
      const delayBounce = setTimeout(() => {
        const token = cookies.get('token');
        if (!token) router.push('/login');
        else setAuthorize(true);

        return () => clearTimeout(delayBounce)
      }, 0);
    }, []);

    return authorize && <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;