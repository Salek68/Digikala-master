import React, { useState } from "react";
import "./Header.scss";
import {
  HiArrowNarrowRight,
  HiArrowSmLeft,
  HiChevronDown,
  HiChevronLeft,
  HiLogin,
  HiMenu,
  HiOutlineShoppingCart,
  HiSearch,
} from "react-icons/hi";
import {
  HiMapPin,
  HiOutlineQuestionMarkCircle,
  HiOutlineXMark,
} from "react-icons/hi2";
import MenuMobile from "../../Components/Menu Mobile/MenuMobile";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiMove } from "react-icons/fi";
import { useRef } from "react";
import MenuPC from "../../Components/Menu PC/MenuPC";

export default function Header() {
  const [show, setShow] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openRegionBox, setOpenRegionBox] = useState(false);
  const navigation = useRef();

  if (openSupport || openSearchBar || openRegionBox || show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  const openHandle = () => setShow(true);
  const closeHandle = () => setShow(false);

  const disclosureHandler = (e) => {
    e.target.classList.toggle("open");
  };

  const hoverhandler = (e) => {
    let attribute = e.target.getAttribute("data");
    navigation.current.classList = "";
    navigation.current.classList.add(attribute);
  };

  const mouseLeaveHandler = () => {
    navigation.current.classList.add("hide");
    setShow(false);
  };

  return (
    <header id="main-header">
      {/* Mobile Nav */}
      <div className="banner-mobile">
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6d1418b428e1cdbed4a21a1de2af47e7204dd9e5_1671277222.jpg?x-oss-process=image/quality,q_95"
          alt=""
        />
      </div>
      <nav className="mobile">
        <div className="top-nav">
          <div onClick={() => setOpenSupport(true)} className="question-icon">
            <HiOutlineQuestionMarkCircle />
          </div>
          <section className={`online-support ${openSupport && "open"} `}>
            <nav className="nav-support">
              <HiArrowSmLeft
                onClick={() => setOpenSupport(false)}
                className="icon"
              />
              <h3>پشتیبانی آنلاین</h3>
            </nav>
            <header className="header-support">
              <h3>سلام👋👋</h3>
              <p>جواب سوال‌هاتون رو می‌تونید در زیر پیدا کنید.</p>
              <p>
                در غیر اینصورت از ما بپرسید، ما همیشه به سوالاتتون جواب
                می‌دیم.😊
              </p>
            </header>
            <main className="disclosure-container">
              <div onClick={(e) => disclosureHandler(e)} className="disclosure">
                <div>
                  <span>چگونه میتوانم یک پروفایل ایجاد کنم؟</span>
                  <span>
                    <HiChevronDown className="icon" />
                  </span>
                </div>
                <hr />
                <p>
                  در وب سایت روی گزینه "ثبت نام" کلیک کنید. میتوانید با استفاده
                  از شماره موبایل ثبت نام خود را انجام دهید. (کد فعال سازی
                  برایتان پیامک میشود .) بعد از وارد نمودن کد فعالسازی ، ثبت نام
                  انجام می شود. سپس روی گزینه تکمیل اطلاعات کلیک و اطلاعات خود
                  را تکمیل نمایید.
                </p>
              </div>
              <div onClick={(e) => disclosureHandler(e)} className="disclosure">
                <div>
                  <span>چطور در دیجی کالا سفارش خود را ثبت کنم ؟</span>
                  <span>
                    <HiChevronDown className="icon" />
                  </span>
                </div>
                <hr />
                <p>
                  بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید اضافه
                  کنید ، پس از انتخاب آدرس میتوانید نوع پرداخت خود را انتخاب
                  کنید.بعد از اتمام ثبت سفارش ، سیستم کد سفارش شما را نمایش
                  خواهد داد.
                </p>
              </div>
              <div onClick={(e) => disclosureHandler(e)} className="disclosure">
                <div>
                  <span>
                    کالایی را که در طرح پیشنهاد شگفت انگیز می باشد می توان با
                    تعداد بیش از یک عدد خریداری کرد؟
                  </span>
                  <span>
                    <HiChevronDown className="icon" />
                  </span>
                </div>
                <hr />
                <p>
                  به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است،
                  دیجی‌کالا تعهدی در قبال سفارش‏‌های تعدادی ندارد و در صورتی که
                  امکان فروش بیشتر از یک عدد وجود داشته باشد، هماهنگی‏‌های لازم
                  با مشتری انجام خواهد شد.
                </p>
              </div>
            </main>
            <footer>
              <div>
                <a href="#">جواب سوالتون رو پیدا نکردید؟</a>
                <button>
                  گفتگو با پشتیبان آنلاین
                  <HiChevronLeft className="icon" />
                </button>
              </div>
            </footer>
          </section>
          <div className="logo">
            <img
              src="https://www.digikala.com/statics/img/svg/logo.svg"
              alt="logo"
            />
          </div>
          <div onClick={() => openHandle()} className="menu-icon">
            <HiMenu />
          </div>
          <MenuMobile show={show} onHide={closeHandle} />
        </div>
        <hr />
        <div className="bottom-nav">
          <div>
            <span>
              <HiOutlineShoppingCart className="icon" />
            </span>
            <Link to="/signup">
              ورود
              <HiLogin className="icon" />
            </Link>
          </div>
          <div onClick={() => setOpenSearchBar(true)} className="search-box">
            <span>جستجو</span>
            <HiSearch className="HiSearch" />
          </div>
          <div className={`search-bar-box ${openSearchBar && "open"}`}>
            <div>
              <input type="text" className="search-input" placeholder="جستجو" />
              <span>
                <HiArrowNarrowRight
                  onClick={() => setOpenSearchBar(false)}
                  className="icon"
                />
              </span>
            </div>
            <section>
              <div>
                <span>جستجوهای پرطرفدار</span>
                <span>
                  <FaFire className="icon" />
                </span>
              </div>
              <div className="popular-searches">
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span>تشک خوشخواب دونفره</span>
                </div>
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span>شیر خشک ببلاک</span>
                </div>
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span>گوشی موبایل اپل iphone 11</span>
                </div>
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span>کاپشن مردانه خلبانی</span>
                </div>
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span>سویشرت شلوار زنانه</span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <hr />
        <div className="select-region" onClick={() => setOpenRegionBox(true)}>
          <span>
            <HiChevronLeft className="icon" />
          </span>
          <span>
            لطفا شهر خود را انتخاب کنید
            <HiMapPin className="icon-map" />
          </span>
        </div>
        <section
          className={`backdrop-select-region-box ${openRegionBox && "open"} `}
        >
          <header>
            <button
              className="close-btn"
              onClick={() => setOpenRegionBox(false)}
            >
              <HiOutlineXMark />
            </button>
            <span>انتخاب شهر</span>
          </header>
          <main className="select-region-box">
            <div>
              <span>مکان یابی خودکار</span>
              <FiMove className="icon" />
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>آذربایجان شرقی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>آذربایجان غربی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>اردبیل</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>اصفهان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>البرز</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>ایلام</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>بوشهر</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>تهران</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>چهارمحال و بختیاری</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>خراسان جنوبی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>خراسان رضوی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>خراسان شمالی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>خوزستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>زنجان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>سمنان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>سیستان و بلوچستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>فارس</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>قزوین</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>قم</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>کردستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>کرمان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>کرمانشاه</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>کهگیلویه و بویراحمد</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>گلستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>گیلان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>لرستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>مازندران</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>مرکزی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>هرمزگان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>همدان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>یزد</span>
            </div>
          </main>
        </section>
      </nav>
      {/* PC Nav */}
      <div className="banner-PC">
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6d1418b428e1cdbed4a21a1de2af47e7204dd9e5_1671277222.jpg?x-oss-process=image/quality,q_95"
          alt=""
        />
      </div>
      <nav className="PC">
        <div className="nav-PC">
          <section>
            <HiOutlineShoppingCart className="icon" />
            <hr />
            <Link to="signup" className="register-btn">
              <span>ورود | ثبت نام</span>
              <HiLogin className="icon" />
            </Link>
          </section>
          <section>
            <div onClick={() => setOpenSearchBar(true)} className="search-box">
              <span>جستجو</span>
              <HiSearch className="HiSearch" />
              <div className={`search-bar-box-PC ${openSearchBar && "open"}`}>
                <div className="search-bar-PC">
                  <input type="text" placeholder="جستجو" />
                  <HiSearch className="HiSearch" />
                </div>
                <div className="img-container">
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9d1b5bf209ca3af63d5a047f0470fd13d4569f03_1668329775.jpg?x-oss-process=image/quality,q_95"
                    alt="product"
                  />
                </div>
                <footer>
                  <div>
                    <span>جستجوهای پرطرفدار</span>
                    <span>
                      <FaFire className="icon" />
                    </span>
                  </div>
                  <Swiper
                    className="slider"
                    spaceBetween={0}
                    slidesPerView={8}
                    navigation
                  >
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span> ماژیک هایلایتر بسته</span>
                    </SwiperSlide>
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span> شیپور</span>
                    </SwiperSlide>
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span>ست یلدا</span>
                    </SwiperSlide>
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span>اپل واچ ultra</span>
                    </SwiperSlide>
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span> لباس تیم ملی ایران</span>
                    </SwiperSlide>
                  </Swiper>
                </footer>
              </div>
            </div>
            <div
              onClick={() => setOpenSearchBar(false)}
              className={` backdrop-PC ${openSearchBar && "open"}`}
            ></div>
            <div className="logo">
              <img
                src="https://www.digikala.com/statics/img/svg/logo.svg"
                alt="logo"
              />
            </div>
          </section>
        </div>
        <div>
          <nav>
            <button onClick={() => setOpenRegionBox(true)}>
              <span>شهر خود را انتخاب کنید</span>
              <span>
                <HiMapPin className="icon-map" />
              </span>
            </button>
            <div className="navbar">
              <a
                data="link-1"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                در دیجی‌کالا بفروشید!
              </a>
              <a
                data="link-2"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                سوالی دارید؟
              </a>
              <hr />
              <a
                data="link-3"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                شگفت‌انگیزها
              </a>
              <a
                data="link-4"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                تخفیف‌ها و پیشنهادها
              </a>
              <a
                data="link-5"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                پرفروش‌ترین‌ها
              </a>
              <a
                data="link-6"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                سوپرمارکت
              </a>
              <hr />
              <div
                data="link-7"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseOver={(e) => setShow(true)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                <span>دسته‌بندی کالاها</span>
                <MenuPC show={show} setShow={setShow} />
              </div>
              <div id="navigation" ref={navigation}></div>
            </div>
            <div
              className={`backdrop-select-box-region-PC ${
                openRegionBox && "open"
              } `}
              onClick={() => setOpenRegionBox(false)}
            >
              <main
                className="select-box-region-PC"
                onClick={(e) => e.stopPropagation()}
              >
                <header>
                  <button
                    className="close-btn"
                    onClick={() => setOpenRegionBox(false)}
                  >
                    <HiOutlineXMark />
                  </button>
                  <span>انتخاب شهر</span>
                </header>
                <section>
                  <div id="auto-region-found">
                    <span>مکان یابی خودکار</span>
                    <FiMove className="icon" />
                  </div>
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>آذربایجان شرقی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>آذربایجان غربی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>اردبیل</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>اصفهان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>البرز</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>ایلام</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>بوشهر</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>تهران</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>چهارمحال و بختیاری</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>خراسان جنوبی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>خراسان رضوی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>خراسان شمالی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>خوزستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>زنجان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>سمنان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>سیستان و بلوچستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>فارس</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>قزوین</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>قم</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>کردستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>کرمان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>کرمانشاه</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>کهگیلویه و بویراحمد</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>گلستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>گیلان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>لرستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>مازندران</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>مرکزی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>هرمزگان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>همدان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>یزد</span>
                  </div>
                </section>
              </main>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}
