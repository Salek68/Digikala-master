import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PopularBrandsSlider.scss";

const PopularBrandsSlider = () => {
  return (
    <div className="popular-brands-container margin-1024">
      <h3 className="popular-brands-h3">محبوب ترین برند ها</h3>
      <Swiper
        className="popular-brands-swiper-container"
        modules={[Navigation]}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 3.5,
          },
          470: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 7,
          },
          1120: {
            slidesPerView: 9,
          },
        }}
      >
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/3518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/100010929.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/9f74161dd136485ac79f5ca5e829b2340419b084_1666776495.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/2994.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/3972.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/87dcb454f4d8df28bd2f8fd902f0f27b5fb1fac4_1666761801.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/627f3a8485f2884e7ae2951adf0761fc3792495e_1627386509.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/5518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/f660c46ffc6d58a19e5c0af9d03c50be9a929571_1627214766.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/b46a720b21296adc1c9d21b931c8d978d0f5f771_1621675109.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/5f9e5a98fc72f4eac2d4b4e6e4e6399ebd9aa65c_1646565463.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public.digikala.com/digikala-brands/bff03daf9cf71a71b7e41b31255ba9e747d1a01f_1644133724.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="popular-brands-swiper-slide">
          <a href="#">
            <div className="img-container">
              <img
                src="https://dkstatics-public-2.digikala.com/digikala-brands/100009092.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                alt=""
              />
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularBrandsSlider;
