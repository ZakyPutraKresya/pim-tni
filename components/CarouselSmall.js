import React, { useEffect, useState } from 'react';
import styles from '@/styles/Main.module.scss'

const CarouselSmall = ({ headerImg, titlePage }) => {
    return (
        <div className={`relative ${styles.carousel}`}>
        <div className={styles['carousel-inner-event']}>
            <div className={styles['carousel-slide-event']}>
              <img src={headerImg} alt={`Image `} className={`w-full h-96 ${styles['carousel-image']}`} />
              <div className={styles['carousel-caption']}>
                <h1>{titlePage}</h1>
              </div>
            </div>
        </div>
      </div>
    )
}

export default CarouselSmall;