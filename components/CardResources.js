import React from "react";
import { FaFilePdf, FaFileAlt } from "react-icons/fa";
import styles from "@/styles/Main.module.scss";
import Link from "next/link";

const CardResources = () => {
  return (
    <div className="container mx-auto my-12 px-12" style={{ marginTop: 75 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <Link href="/report">
          <div
            className={`${styles.card} ${styles["custom-card"]} ml-2 bg-gray-200`}
            style={{ marginLeft: "175px" }}
          >
            <div
              className={`${styles["card-body"]} text-center`}
              style={{ marginTop: 50 }}
            >
              <div className="flex items-center justify-center h-12 mx-auto mb-4">
                <FaFilePdf size={80} className="mt-3" />
              </div>
              <div className={styles["utility-caption"]}>
                <h3>
                  <b>Pusinfomar TNI Report</b>
                </h3>
                <h4>Be updated with the latest report</h4>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/infographis">
          <div
            className={`${styles.card} ${styles["custom-card"]} ml-2 bg-gray-200`}
            style={{ marginRight: "175px" }}
          >
            <div
              className={`${styles["card-body"]} text-center`}
              style={{ marginTop: 50 }}
            >
              <div className="flex items-center justify-center h-12 mx-auto mb-4">
                <FaFileAlt size={80} className="mt-3" />
              </div>
              <div className={styles["utility-caption"]}>
                <h3>
                  <b>INFOGRAPHIS</b>
                </h3>
                <h4>INFOGRAPHIS</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardResources;
