import React from "react";
import "./BestsellingProducts.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import ChangerNumToPersian from "../../Utils/ChangerNumToPersian";
import { FreeMode, Navigation } from "swiper";

const BestsellingProducts = () => {
  return (
    <div className="bestselling-products-cotainer margin-1024">
      <div className="bestselling-products-title">
        <h3>پرفروش ترین کالاها</h3>
        <a href="#">مشاهده همه</a>
      </div>
      <Swiper
        className="bestselling-products-slider"
        modules={[FreeMode, Navigation]}
        navigation={true}
        freeMode={true}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 5,
          },
          470: {
            slidesPerView: 1.5,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 3,
          },
          1096: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(1)}</span>
              <div>
                <p>هندزفری بلوتوثی مدل inpods 12</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/114356296.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(2)}</span>
              <div>
                <p>زعفران درجه یک مصطفوی - 4.608 گرم</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/06aaa82b2af4b71992683701769b0afa4fa169bf_1666160815.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(3)}</span>
              <div>
                <p>گوشی موبایل سامسونگ مدل Galaxy A13 دو سیم کارت</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/6de67c3df626f9a133a3aa41815b9d7b7619cc60_1665829192.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(4)}</span>
              <div>
                <p>گوشی موبایل سامسونگ مدل Galaxy A13 دو سیم کارت </p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/15b8f8babca8332b4eff19f50cf96f8ad13d8caf_1665486040.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(5)}</span>
              <div>
                <p>پوشک بچه مولفیکس مدل اقتصادی سایز 5 بسته 60 عددی</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/6bf1664daf7050eae0839cd469079f5677575121_1665485784.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(6)}</span>
              <div>
                <p>پوشک بچه مولفیکس مدل اقتصادی سایز 4 بسته 72 عددی</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/4bc080993af2f26c76e94fe7907ddef881f2b9c6_1609743727.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(7)}</span>
              <div>
                <p>آب معدنی میوا - 1.5 لیتر بسته 6 عددی</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/120501150.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(8)}</span>
              <div>
                <p>خامه صباح - 200 میلی لیتر</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/4bfbd81ddd38bf9360aa77a5abeb24e463ce52ab_1610192619.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(6)}</span>
              <div>
                <p>پنیر تازه پاک - 400 گرم</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/2eb81b453236bf344dbac1c6b63b0c7be632763f_1606244025.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(10)}</span>
              <div>
                <p>هدفون بی سیم مدل BTH-F9-5</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/e7d457782e4d89a955845e1a813c4c1a87521590_1653129139.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(11)}</span>
              <div>
                <p>مایع لباسشویی پرسیل مدل یونیورسال وزن 2.7 کیلوگرم</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/c9d680a6f435a00bb66ce8829c19a40ef5fe4678_1620820609.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(12)}</span>
              <div>
                <p>کره شکلی - 50 گرم بسته 6 عددی</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/4879003.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(13)}</span>
              <div>
                <p>شامپو پرژک مدل سیر حجم 450 میلی لیتر</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/ee3d9a63e5de881d9ee212a51efafe3c96df2ec2_1652620920.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(14)}</span>
              <div>
                <p>روغن نیمه جامد لادن - 5 کیلوگرم</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/c4804fdd140a21f39cfb068c146192a9af8cefce_1638283241.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(15)}</span>
              <div>
                <p>کنسرو ماهی تن در روغن گالکسی - 180 گرم</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(16)}</span>
              <div>
                <p>اسپاگتی قطر 1.2 زر ماکرون مقدار 700 گرم</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/cc024d9b9cdee1a22ef33d1aba7fdf4d4ff8ccc8_1596621135.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(17)}</span>
              <div>
                <p>روغن ذرت لادن - 1.8 لیتر</p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-products/4780829.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(18)}</span>
              <div>
                <p>پنیر تازه پاستوریزه پگاه - 450 گرم</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestsellingProducts;
