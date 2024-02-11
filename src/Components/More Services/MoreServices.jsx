import React, { useState } from "react";
import { HiArrowLeft, HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import "./MoreServices.scss";

const MoreServices = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <section className="more-services-container max-width-2">
      <a onClick={() => setOpen(true)}>
        <div>
          <div className="more-icon">
            <HiOutlineDotsHorizontal />
          </div>
          <span>بیشتر</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png"
              alt=""
            />
          </div>
          <span>دیجی پلاس</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/28a6ef720244892accbcf8da7b9ebb7262d3172b_1670930099.png"
              alt=""
            />
          </div>
          <span>قرعه کشی پاییز</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/5ad4b771667ebbd37ac6df87aff1f8129351cbb1_1668943323.png"
              alt=""
            />
          </div>
          <span>جام جهانی</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/6c69096a524add2d4646cd162dfa5f66d4ddceac_1668952039.png"
              alt=""
            />
          </div>
          <span>خرید عمده و سازمانی</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png"
              alt=""
            />
          </div>
          <span>خرید اقساطی</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png"
              alt=""
            />
          </div>
          <span>حراج استایل</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png"
              alt=""
            />
          </div>
          <span>دیجی کالا جت</span>
        </div>
      </a>
      <div
        className={`backdrop-more-services-section ${open && "open"}`}
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="more-services-section-box"
        >
          <header className="more-section-services-header">
            <button className="close-btn" onClick={() => setOpen(false)}>
              <HiOutlineXMark />
            </button>
            <h3>خدمات دیجیکالا</h3>
          </header>
          <main className="more-section-services-main">
            <div className="more-section-services-main-header">
              <a href="#">
                <div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/44f0cf40d5aa1c433866d47976cc0c6e82c86823_1648896970.png"
                      alt=""
                    />
                  </div>
                  <span>دیجی کلاب</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/f18a182f7c300af9ce3eb8f47201ef340fc87eb3_1670930133.png"
                      alt=""
                    />
                  </div>
                  <span>ماموریت ها</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png"
                      alt=""
                    />
                  </div>
                  <span>چرخ و بخت</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png"
                      alt=""
                    />
                  </div>
                  <span>دیجی پلاس</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/28a6ef720244892accbcf8da7b9ebb7262d3172b_1670930099.png"
                      alt=""
                    />
                  </div>
                  <span>قرعه کشی پاییز</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/5ad4b771667ebbd37ac6df87aff1f8129351cbb1_1668943323.png"
                      alt=""
                    />
                  </div>
                  <span>جام جهانی</span>
                </div>
              </a>
            </div>
            <div className="more-section-services-group">
              <h3>سرویس های گروه دیجی کالا</h3>
              <div className="services-items-container">
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                    <h3>دیجی کالا جت</h3>
                    <p>خرید فوری از سوپرمارکت های اطراف</p>
                  </div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                    <h3>حراج استایل</h3>
                    <p>فروشگاه آنلاین مد و پوشاک</p>
                  </div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                    <h3>خرید قسطی</h3>
                    <p>خرید قسطی گوشی موبایل ، لپتاپ ، طلا ، و لوازم خانگی</p>
                  </div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                    <h3>خرید عمده و سازمانی</h3>
                    <p>خرید عمده و سازمانی انواع کالا</p>
                  </div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/6c69096a524add2d4646cd162dfa5f66d4ddceac_1668952039.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                    <h3>پیندو</h3>
                    <p>ثبت آگهی برای کالا و خدمات</p>
                  </div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/934a12850c05efdec1969aff883d107cc600a7b3_1648896993.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                    <h3>فیدیبو</h3>
                    <p>خرید کتاب و دانلود کتاب الکترونیک</p>
                  </div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/3e870ff8c78bd76061a920c29e346027809817f8_1648896950.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                    <h3>دیجی کالا مهر </h3>
                    <p>به مسیر تازه مهربانی بیا</p>
                  </div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/17bb6daa07ae2ec11867fb7320ed6f79b26f1f4b_1666724993.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                    <h3>بومی و محلی</h3>
                    <p></p>
                  </div>
                  <div className="img-container">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-bellatrix/b9f37d8283afd3a309e30756a38c3f879453262a_1668942073.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MoreServices;
