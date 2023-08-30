import React from "react";
import { FaRegBuilding, FaUserFriends } from "react-icons/fa";
import styles from "@/styles/Main.module.scss";
import Link from "next/link";

const CardAboutUs = () => {
  return (
    <div className="container mx-auto my-12 px-12" style={{ marginTop: 75 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <Link href="/aboutus">
          <div
            className={`${styles.card} ${styles["custom-card"]} ml-2 bg-gray-200`}
            style={{ marginLeft: "175px" }}
          >
            <div
              className={`${styles["card-body"]} text-center`}
              style={{ marginTop: 50 }}
            >
              <div className="flex items-center justify-center h-12 mx-auto mb-4">
                <FaRegBuilding size={80} className="mt-3" />
              </div>
              <div className={styles["utility-caption"]}>
                <h3>
                  <b>ABOUT PUSINFOMAR TNI</b>
                </h3>
                <h4>Be updated with the latest activities</h4>
              </div>
            </div>
          </div>
        </Link>
        {/* Quick Link 2 */}
        <Link href="/our-team">
          <div
            className={`${styles.card} ${styles["custom-card"]} ml-2 bg-gray-200`}
            style={{ marginRight: "175px" }}
          >
            <div
              className={`${styles["card-body"]} text-center`}
              style={{ marginTop: 50 }}
            >
              <div className="flex items-center justify-center h-12 mx-auto mb-4">
                <FaUserFriends size={80} className="mt-3" />
              </div>
              <div className={styles["utility-caption"]}>
                <h3>
                  <b>Our Team</b>
                </h3>
                <h4>Find More about our Team</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardAboutUs;
