import React from "react";
import "./ProductsSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { HiArrowLeft, HiChevronLeft } from "react-icons/hi";
import ChangerNumToPersian from "../../Utils/ChangerNumToPersian";
import { useEffect } from "react";
import { fetchProductsSlider } from "../../Features/ProductSlider/ProductSliderSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsSlider = () => {
  const { productsSlider } = useSelector((state) => state.productSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsSlider());
  }, []);

  return (
    <>
      <Swiper
        className="swiper-products max-width-2 margin-1024"
        navigation
        freeMode={true}
        modules={[FreeMode, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2.4,
            spaceBetween: 5,
          },
          470: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          1096: {
            slidesPerView: 7.1,
            spaceBetween: 2,
          },
        }}
      >
        <SwiperSlide className="product-item">
          <div className="img-container suggestion">
            <img
              src="https://www.digikala.com/statics/img/svg/amazing-typo.svg"
              alt=""
            />
          </div>
          <div className="img-container suggestion-box">
            <img
              src="https://www.digikala.com/statics/img/png/specialCarousel/box.png"
              alt=""
            />
          </div>
          <div>
            <a href="#">
              <span>مشاهده همه </span>
              <HiChevronLeft className="icon" />
            </a>
          </div>
        </SwiperSlide>
        {productsSlider.map((product) => {
          return (
            <SwiperSlide key={product.id} className="product-item">
              <a href="#">
                <div className="product-img-container">
                  <img src={product.image} alt="" />
                </div>
                <div className="price-container">
                  <div className="discount-box">
                    <span className="amount-discount">
                      {ChangerNumToPersian(product.discount)}%
                    </span>
                    <span>
                      {ChangerNumToPersian(
                        product.price - (product.price * product.discount) / 100
                      )}
                    </span>
                  </div>
                  <div className="price-box">
                    <span>{ChangerNumToPersian(product.price)}</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="product-item">
          <a href="#">
            <span>
              <HiArrowLeft />
            </span>
            <span>مشاهده همه</span>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductsSlider;
