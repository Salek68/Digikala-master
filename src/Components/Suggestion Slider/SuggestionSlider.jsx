import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SuggestionSlider.scss";

const SuggestionSlider = () => {
  return (
    <>
      <h3 className="suggestion-h3">پیشنهاد دیجی کالا</h3>
      <Swiper
        modules={[Navigation]}
        className="swiper-suggestion margin"
        spaceBetween={0}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 2.1,
          },
          470: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 5,
          },
          1120: {
            slidesPerView: 7,
          },
        }}
      >
        <SwiperSlide className="swiper-slider-suggestion">
          <div className="seggestion-items">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/114000427.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>اصلاح موی صورت</span>
            </a>
          </div>
          <div className="seggestion-items border-top">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/6b94c5361e8a66828dc7c8ad04b916ce5f0fb53e_1662043854.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>کاپشن مردانه</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-suggestion">
          <div className="seggestion-items">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/2b7a3b325bc091e1792ab1e6f6747c7397b6a430_1614536233.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>ماوس</span>
            </a>
          </div>
          <div className="seggestion-items border-top">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/1e65c014a29cddafbcdee4efd5041ba804864e91_1650263690.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>توپ</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-suggestion">
          <div className="seggestion-items">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/e3ce9c627823fd19f7b6627ce059c889e2bd556a_1630784095.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>آشنایی با فنون</span>
            </a>
          </div>
          <div className="seggestion-items border-top">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/b28c028eb993ec44f4ee2e821eb9281ff5ca1047_1624691967.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>کیبورد</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-suggestion">
          <div className="seggestion-items">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/543e622e9e1118efa748dbf865f224f1b8be1105_1628705772.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>جوراب مردانه</span>
            </a>
          </div>
          <div className="seggestion-items border-top">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/d1476a05bc84a98521a53fad140efa060a6c1bf9_1605099191.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>کنسول خانگی</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-suggestion">
          <div className="seggestion-items">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/3d43ef063bd1855ac35ec713873ed98095fdc09b_1671470199.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>لپ تاپ و الترابوک</span>
            </a>
          </div>
          <div className="seggestion-items border-top">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/1a9e53cd390a8698ec880cb29ac054645f38dcc7_1636540872.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>تبلت</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-suggestion">
          <div className="seggestion-items">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>هدفون ، هدست و . . .</span>
            </a>
          </div>
          <div className="seggestion-items border-top">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/66f8e6e62dff684345c94eb6cf9feeb7fb0669e3_1662628950.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>ساعت هوشمند</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-suggestion">
          <div className="seggestion-items">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>گوشی موبایل</span>
            </a>
          </div>
          <div className="seggestion-items border-top">
            <a href="#">
              <div className="img-container">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/ff30c7f1b01d44f35423f0fcb56f3cb76a42ea2b_1661171000.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    alt=""
                  />
                </div>
              </div>
              <span>کیف و کاور گوشی</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SuggestionSlider;
