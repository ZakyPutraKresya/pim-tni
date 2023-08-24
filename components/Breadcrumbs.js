import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Main.module.scss'

const Breadcrumbs = ({ data }) => {
  return (
    <div className={`ml-14 ${styles['breadcrumbs-container']}`}>
      <div className={styles['breadcrumbs']}>
        {data.map((breadcrumb, index) => (
          <span key={index} style={{
            fontSize: "1.5rem", 
            color: "#000000",
            textDecoration: "none",
            marginRight: "0.5rem"
          }}>
            {breadcrumb.link ? (
              <Link href={breadcrumb.link}>
                {breadcrumb.text}
              </Link>
            ) : (
              <span>{breadcrumb.text}</span>
            )}
            {index < data.length - 1 && <span>&nbsp;&gt;&nbsp;</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
