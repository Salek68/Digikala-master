import React from "react";
import "./HeaderSlider.scss";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeaderSlider() {
  return (
    <section className="slider-container">
      <Swiper
      
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 6000,
          reverseDirection: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "active",
        }}
      >
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/382a0e9fa3ab87e04ff7622e76d7b3789c42f6dd_1670764908.jpg?x-oss-process=image/quality,q_95"
              media="(min-width:764px)"
            />
            <source />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/0c84db67ae84f62b4f61cdce90600d046aabffed_1670764909.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/e7d643645c8fafe6888c89b8f4f60aa42eb4a83e_1666883596.jpg?x-oss-process=image/quality,q_95"
              media="(min-width:764px)"
            />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d7794df8b1d1057092c3042ef9bfb96814154015_1666883597.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/23a1d1fc1a5c234bf72d78d8f13551016a74a97c_1670010098.gif?x-oss-process=image"
              media="(min-width:764px)"
            />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a73549bfa64183c5349e894e0003b01682e59eb3_1670010100.gif?x-oss-process=image"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/4b6d8e35dca2f4501080020c2b4112d44c2d64cb_1670084248.gif?x-oss-process=image"
              media="(min-width:764px)"
            />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/16114b317a65f93dde7591b9d4b6616f5779d384_1670084250.gif?x-oss-process=image"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/7746fee5161084ecef9e608bc7c147bc8bf54f9e_1671020113.jpg?x-oss-process=image/quality,q_95"
              media="(min-width:764px)"
            />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a316b5de3e1fe73926b92067193589e1bdc4ffc3_1667894593.gif?x-oss-process=image"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/450fa592a6d93b88f7904eb7b328c4761538a09f_1671134001.jpg?x-oss-process=image/quality,q_95"
              media="(min-width:764px)"
            />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3fe2fc3713c5ee5dac1959982330b86e0361d26d_1671134002.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/12164fa4fbd9febd176bbe4f2cbc5cdc1dd63029_1670496360.jpg?x-oss-process=image/quality,q_95"
              media="(min-width:764px)"
            />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d5812655f51d7a096526ee7e7aa6307e00756506_1670496361.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/3405d319d4eae572a56d72b192e70a3ffd554be9_1670495595.jpg?x-oss-process=image/quality,q_95"
              media="(min-width:764px)"
            />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/643e5cb405ee6bfcfaa1cf510e8344b22e6c8ee1_1670495596.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
