// DashboardLayout.js
import Head from 'next/head';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dark:bg-gray-700 text-white min-h-screen">
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
