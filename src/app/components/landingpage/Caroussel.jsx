"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "@/app/components/landingpage/Caroussel.module.scss";

//import af det styling og funktionalitet, som kommer fra swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

//Denne karussel er lavet med det npm komponent, der kommer fra swiper.js (https://swiperjs.com)
//Vi har bygget den og tilføjede funktionalitet ved at læse den tilhørende dokumentation
export default function Caroussel() {
  return (
    <div className={styles.container}>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
        pagination={{
          type: "fraction",
          horizontalClass: styles.test,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Keyboard, Navigation]}
        keyboard={{
          enabled: true,
        }}
        className={styles.swiper}
      >
        <SwiperSlide>
          <Link className={styles.link} href="/kategorier" prefetch={false}>
            <section className={`${styles.card} ${styles.indoor_cycling}`}>
              <div className={styles.overlay}>
                <h2 className={styles.title}>Wellcome Indoor Cycling</h2>
              </div>
              <div className={styles.navigation_overlay}></div>
            </section>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.link} href="/kategorier" prefetch={false}>
            <section className={`${styles.card} ${styles.energy}`}>
              <div className={styles.overlay}>
                <h2 className={styles.title}>Wellcome Energy</h2>
              </div>
              <div className={styles.navigation_overlay}></div>
            </section>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.link} href="/kategorier" prefetch={false}>
            <section className={`${styles.card} ${styles.functional}`}>
              <div className={styles.overlay}>
                <h2 className={styles.title}>Wellcome Functional</h2>
              </div>
              <div className={styles.navigation_overlay}></div>
            </section>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.link} href="/kategorier" prefetch={false}>
            <section className={`${styles.card} ${styles.heat}`}>
              <div className={styles.overlay}>
                <h2 className={styles.title}>Wellcome Heat</h2>
              </div>
              <div className={styles.navigation_overlay}></div>
            </section>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.link} href="/kategorier" prefetch={false}>
            <section className={`${styles.card} ${styles.nordic_strong}`}>
              <div className={styles.overlay}>
                <h2 className={styles.title}>Wellcome Nordic Strong</h2>
              </div>
              <div className={styles.navigation_overlay}></div>
            </section>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.link} href="/kategorier" prefetch={false}>
            <section className={`${styles.card} ${styles.pleasure}`}>
              <div className={styles.overlay}>
                <h2 className={styles.title}>Wellcome Pleasure</h2>
              </div>
              <div className={styles.navigation_overlay}></div>
            </section>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.link} href="/kategorier" prefetch={false}>
            <section className={`${styles.card} ${styles.body_mind}`}>
              <div className={styles.overlay}>
                <h2 className={styles.title}>Wellcome Body Mind</h2>
              </div>
              <div className={styles.navigation_overlay}></div>
            </section>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.link} href="/kategorier" prefetch={false}>
            <section className={`${styles.card} ${styles.reformer}`}>
              <div className={styles.overlay}>
                <h2 className={styles.title}>Wellcome Reformer</h2>
              </div>
              <div className={styles.navigation_overlay}></div>
            </section>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
