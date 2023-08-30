import React from "react";
import { FaCalendar, FaGlobe } from "react-icons/fa";
import styles from '@/styles/Main.module.scss'
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="container mx-auto my-12 px-12" style={{ marginTop: 150 }}>
      <h2 className="text-2xl font-bold mb-4 text-center">Quick Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <Link href="/events">
          <div
            className={`${styles.card} ${styles['custom-card']} ml-2 bg-gray-200`}
            style={{ marginLeft: "175px" }}
          >
            <div className={`${styles['card-body']} text-center`} style={{ marginTop: 50 }}>
              <div className="flex items-center justify-center h-12 mx-auto mb-4">
                <FaCalendar size={80} className="mt-3"/>
              </div>
              <div className={styles['utility-caption']}>
                <h3>
                  <b>Events</b>
                </h3>
                <h4>Be updated with the latest activities</h4>
              </div>
            </div>
          </div>
        </Link>
        {/* Quick Link 2 */}
        <Link href='/partners'>
          <div
            className={`${styles.card} ${styles['custom-card']} ml-2 bg-gray-200`}
            style={{ marginRight: "175px" }}
          >
            <div className={`${styles['card-body']} text-center`} style={{ marginTop: 50 }}>
              <div className="flex items-center justify-center h-12 mx-auto mb-4">
                <FaGlobe size={80} className="mt-3" />
              </div>
              <div className={styles['utility-caption']}>
                <h3>
                  <b>Our Partners</b>
                </h3>
                <h4>Find More about our partners</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
