import React from "react";
import "./MenuMobile.scss";
import { HiChevronDown, HiChevronLeft } from "react-icons/hi";

const MenuMobile = ({ show, onHide }) => {
  const toggleHandler = (e) => {
    e.target.classList.toggle("open");
  };

  return (
    <>
      <aside className={`aside-mobile ${show && "menu-show"} `}>
        <header>
          <img
            src="https://www.digikala.com/statics/img/svg/digi.svg"
            alt="logo"
          />
        </header>
        <hr />
        <section>
          <a href="#">سوپرمارکت</a>
          <a href="#">پر فروش ترین</a>
          <a href="#">تخفیف ها و پیشنهاد ها</a>
          <a href="#">شگفت انگیزها</a>
          <a href="#">سوالی دارید ؟</a>
          <a href="#">در دیجی کالا بفروشید</a>
        </section>
        <hr />
        {/* Products Category */}
        <section>
          <h6>دسته بندی کالاها</h6>
          {/* Products Category 1 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>موبایل</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            {/* 1 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>برند های مختلف گوشی موبایل</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">گوشی اپل</a>
              <a href="#">گوشی سامسونگ</a>
              <a href="#">گوشی شیایومی</a>
              <a href="#">گوشی نوکیا</a>
              <a href="#">گوشی هواوی</a>
              <a href="#">گوشی آنر</a>
              <a href="#">گوشی موتورولا</a>
              <a href="#">گوشی جی پلاس</a>
              <a href="#">گوشی وان پلاس</a>
              <a href="#">گوشی جی ال ایکس</a>
              <a href="#">گوشی بلو</a>
              <a href="#">گوشی کاترپیلار</a>
              <a href="#">گوشی ویوو</a>
              <hr />
            </section>
            {/* 2 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>گوشی بر اساس قیمت</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">گوشی تا 2 میلیون تومان</a>
              <a href="#">گوشی تا 5 میلیون تومان</a>
              <a href="#">گوشی تا 7 میلیون تومان</a>
              <a href="#">گوشی تا 15 میلیون تومان</a>
              <a href="#">گوشی بالای 15 میلیون تومان</a>
              <hr />
            </section>
            {/* 3 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>گوشی بر اساس حافظه داخلی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">گوشی تا 16 گیگابایت</a>
              <a href="#">گوشی تا 32 گیگابایت</a>
              <a href="#">گوشی تا 64 گیگابایت</a>
              <a href="#">گوشی تا 128 گیگابایت</a>
              <a href="#">گوشی تا 256 گیگابایت</a>
              <a href="#">گوشی تا 1 ترابایت</a>
              <hr />
            </section>
            {/* 4 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>رزولوشن عکس</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">تا 13 مگاپیکسل</a>
              <a href="#">تا 16 مگاپیکسل</a>
              <a href="#">تا 48 مگاپیکسل</a>
              <a href="#">تا 64 مگاپیکسل</a>
              <a href="#">تا 108 مگاپیکسل</a>
              <hr />
            </section>
            {/* 5 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>گوشی بر اساس کاربری</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">گوشی اقتصادی</a>
              <a href="#">گوشی میان رده </a>
              <a href="#">گوشی دانش آموزی</a>
              <a href="#">گوشی گیمینگ</a>
              <a href="#">گوشی پرچمدار</a>
              <a href="#">گوشی ضد آب</a>
              <a href="#">گوشی مناسب عکاسی</a>
              <a href="#">گوشی 5 G</a>
              <a href="#">دو سیم کارت</a>
              <a href="#"> (اندروید) Android</a>
              <a href="#">IOS</a>
              <a href="#">سایر سیستم عامل ها</a>
              <hr />
            </section>
          </section>
          {/* Products Category 2 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>کالای دیجیتال</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم جانبی گوشی </span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کیف و کاور گوشی</a>
              <a href="#">(شارژر همراه ) پاور بانک</a>
              <a href="#">پایه نگهدارنده گوشی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>گوشی موبایل</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">اپل</a>
              <a href="#">سامسونگ</a>
              <a href="#">شیایومی</a>
              <a href="#">نوکیا</a>
              <a href="#">هواوی</a>
              <a href="#">آنر</a>
              <hr />
            </section>
            <a href="#" className="exception">
              واقیعت مجازی
            </a>
            <a href="#" className="exception">
              مچ بند و ساعت هوشمند
            </a>
            <a href="#" className="exception">
              هدفون ، هدست ، هندزفری
            </a>
            <a href="#" className="exception">
              اسپیکر بلوتوث و با سیم
            </a>
            <a href="#" className="exception">
              هارد ، فلش و SSD
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>دوربین</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">دوربین عکاسی دیجیتال</a>
              <a href="#">دوربین ورزشی و فیلم برداری</a>
              <a href="#">دوربین چاپ سریع</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم جانبی دوربین</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لنز</a>
              <a href="#">کیف</a>
              <a href="#">کارت حافظه</a>
              <a href="#">کاغذ چاپ عکس</a>
              <hr />
            </section>
            <a href="#" className="exception">
              دوربین دو چشمی و شکاری
            </a>
            <a href="#" className="exception">
              تلسکوپ
            </a>
            <a href="#" className="exception">
              پلی استیشن ، ایکس باکس و بازی
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>کامپیوتر و تجهیزات جانبی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">تجهیزات مخصوص بازی</a>
              <a href="#">مانیتور</a>
              <a href="#">کیس های اسمبل شده</a>
              <a href="#">قطعات داخلی کامپیوتر</a>
              <a href="#">ماوس</a>
              <a href="#">کیبورد</a>
              <hr />
            </section>
            <a href="#" className="exception">
              لپ تاپ
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم جانبی لپ تاپ</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کیف ، کوله و کاور</a>
              <a href="#">کابل صدا ، AUX و HDMI</a>
              <hr />
            </section>
            <a href="#" className="exception">
              تبلت
            </a>
            <a href="#" className="exception">
              شارژر تبلت و موبایل
            </a>
            <a href="#" className="exception">
              کیف ، کاور ، لوازم جانبی تبلت
            </a>
            <a href="#" className="exception">
              باتری
            </a>
            <a href="#" className="exception">
              دوربین های های تحت شبکه
            </a>
            <a href="#" className="exception">
              مودم و تجهیزات شبکه
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ماشین های اداری</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">تلفن ، بی سیم و سانترال</a>
              <a href="#">فکس</a>
              <a href="#">پرینتر</a>
              <a href="#">لوازم جانبی اداری</a>
              <hr />
            </section>
            <a href="#" className="exception">
              کتابخوان فیدیبوک
            </a>
            <a href="#" className="exception">
              کارت هدیه خرید از دیجی کالا
            </a>
          </section>
          {/* Products Category 3 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>خودرو ، ابزار و تجهیزات صنعتی</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            {/* 1 */}
            <a href="#" className="exception">
              خودروهای ایرانی و خارجی
            </a>
            {/* 2 */}
            <a href="#" className="exception">
              موتور سیکلت
            </a>
            {/* 3 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم جانبی خودرو و موتورسیکلت</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لوزم تزیینی</a>
              <a href="#">سیستم صوتی و تصویری</a>
              <a href="#">نظافت و نگهداری خودرو</a>
              <a href="#">کلاه کاسکت و لوازم جانبی موتور </a>
              <hr />
            </section>
            {/* 4 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم یدکی خودرو و موتورسیکلت</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">دیسک و صفحه کلاچ</a>
              <a href="#">جلوبندی و تعلیق</a>
              <a href="#">چراغ خودرو</a>
              <a href="#">تسمه خودرو</a>
              <a href="#">کمک فنر</a>
              <hr />
            </section>
            {/* 5 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم مصرفی خودرو و موتورسیکلت</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لاستیک و تایر</a>
              <a href="#">لنت ترمز</a>
              <a href="#">روغن موتور و ضد یخ</a>
              <a href="#">مکمل سوخت و روغن و انواع فیلتر</a>
              <hr />
            </section>
            {/* 6 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ابزار برقی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">دریل ، پیچ گوشتی برقی و شارژی</a>
              <a href="#">فرز و سنگ رومیزی</a>
              <a href="#">موتور برق</a>
              <a href="#">مکنده د دمنده</a>
              <a href="#">کارواش</a>
              <a href="#">کمپرسور و جک خودرو</a>
              <a href="#">ایزار همه کاره برقی و شارژی</a>
              <hr />
            </section>
            {/* 7 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ابزار غیر برقی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">ابزار دستی</a>
              <a href="#">مجموعه ابزار</a>
              <a href="#">نردبان</a>
              <a href="#">پیچ گوشتی و فازمتر</a>
              <a href="#">نظم دهنده ابزار</a>
              <a href="#">متر ، تراز ، اندازه گیری دقیق</a>
              <a href="#">لوازم روانکاری</a>
              <a href="#">چسب صنعتی</a>
              <hr />
            </section>
            {/* 8 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم و یراق آلات ساختمانی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">شیرآلات</a>
              <a href="#">رنگ</a>
              <a href="#">دستگیره در</a>
              <hr />
            </section>
            {/* 9 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم باغبانی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">قیچی ، چاقو و ابزار باغبانی</a>
              <a href="#">بذر و تخم گیاهان</a>
              <a href="#">تبر ، بیل و کلنگ</a>
              <a href="#">خاک ، کود و آفت کش</a>
              <hr />
            </section>
            {/* 10 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>نور و روشنایی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لوستر آباژور</a>
              <a href="#">لامپ</a>
              <a href="#">چند راهی برق و محافظ ولتاژ</a>
              <hr />
            </section>
            {/* 11 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>تجهیزات ایمنی و کار</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کفش ایمنی</a>
              <hr />
            </section>
            {/* 12 */}
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>حفاظتی و امنیتی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">گاوصندق</a>
              <hr />
            </section>
          </section>
          {/* Products Category 4 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>مد و پوشاک</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <a href="#" className="exception">
              مردانه
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لباس مردانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">سوییشرت و هودی مردانه</a>
              <a href="#">ژاکت و پلیور مردانه</a>
              <a href="#">شلوار</a>
              <a href="#">لباس زیر</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>کفش مردانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کفش روزمره</a>
              <a href="#">کفش رسمی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>اکسسوری مردانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">ساعت</a>
              <a href="#">کیف</a>
              <a href="#">کمربند</a>
              <hr />
            </section>
            <a href="#" className="exception">
              زنانه
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لباس زنانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">پالتو و بارانی و کاپشن زنانه</a>
              <a href="#">سوییشرت و هودی زنانه</a>
              <a href="#">ژاکت و پلیور زنانه</a>
              <a href="#">شلوار و سرهمی</a>
              <a href="#">لباس زیر</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>کفش زنانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کفش روزمره</a>
              <a href="#">کفش تخت</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>اکسسوری زنانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">ساعت</a>
              <a href="#">کیف</a>
              <a href="#">شال و روسری</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>طلا</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">زیورآلات طلا زنانه</a>
              <a href="#">زیورآلات طلا مردانه</a>
              <a href="#">زیورآلات طلا بچگانه</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>زیورآلات زنانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">دستبند</a>
              <a href="#">گوشواره</a>
              <a href="#">گردنبند</a>
              <hr />
            </section>
            <a href="#" className="exception">
              زیورآلات نقره زنانه
            </a>
            <a href="#" className="exception">
              عینک آفتابی زنانه
            </a>
            <a href="#" className="exception">
              عینک آفتابی مردانه
            </a>
            <a href="#" className="exception">
              پوشاک ورزشی زنانه
            </a>
            <a href="#" className="exception">
              پوشاک ورزش مردانه
            </a>
            <a href="#" className="exception">
              کفش ورزشی مردانه
            </a>
            <a href="#" className="exception">
              کفش ورزشی زنانه
            </a>
            <a href="#" className="exception">
              پوشاک ورزشی دخترانه
            </a>
            <a href="#" className="exception">
              پوشاک ورزشی پسرانه
            </a>
            <a href="#" className="exception">
              کفش ورزشی پسرانه
            </a>
            <a href="#" className="exception">
              کفش ورزشی دخترانه
            </a>
            <a href="#" className="exception">
              کوله پشتی مردانه
            </a>
            <a href="#" className="exception">
              بچه گانه
            </a>
          </section>
          {/* Products Category 5 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>کالاهای سوپرمارکتی</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>کالای اساسی و خوار و بار</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">نان</a>
              <a href="#">برنج</a>
              <a href="#">روغن</a>
              <a href="#">قند</a>
              <a href="#">شکر</a>
              <a href="#">سس</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>صبحانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">مربا</a>
              <a href="#">عسل</a>
              <a href="#">حلواشکری ، ارده و کنجد</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>موار پروتئینی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">سوسیس و کالباس</a>
              <a href="#">گوشت گوسفندی</a>
              <a href="#">گوشت مرغ</a>
              <a href="#">تخم مرغ</a>
              <a href="#">گوشت گاو و گوساله</a>
              <a href="#">میگو</a>
              <a href="#">ماهی</a>
              <a href="#">تن ماهی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لبنیات</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">شیر</a>
              <a href="#">ماست</a>
              <a href="#">پنیر</a>
              <a href="#">خامه</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>نوشیدنی ها</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">چای</a>
              <a href="#">دمنوش</a>
              <a href="#">قهوه</a>
              <a href="#">آب و آب معدنی</a>
              <a href="#">ماءالشعیر</a>
              <a href="#">نوشابه</a>
              <a href="#">شربت و آبمیوه</a>
              <hr />
            </section>
            <a href="#" className="exception">
              میوه و سبزی
            </a>
            <a href="#" className="exception">
              غذای آماده و نودل
            </a>
            <a href="#" className="exception">
              فرآورده های منجمد
            </a>
            <a href="#" className="exception">
              کنسرو و کمپوت
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>تنقلات</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">شکلات ، تافی و آبنبات</a>
              <a href="#">بیسکویت و ویفر</a>
              <a href="#">مغز طعم دار خشکبار</a>
              <a href="#">کیک و کلوچه</a>
              <a href="#">چبپس و پاپ کورن</a>
              <a href="#">پفک و اسنک</a>
              <a href="#">آدامس و خوشبوکننده</a>
              <hr />
            </section>
            <a href="#" className="exception">
              خشکبار و شیرینی
            </a>
          </section>
          {/* Products Category 6 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>اسباب بازی، کودک و نوزاد</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>بهداشت و حمام کودک و نوزاد</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">پوشک</a>
              <a href="#">دستمال مرطوب</a>
              <a href="#">حوله</a>
              <a href="#">وان حمام نوزاد</a>
              <a href="#">مینی واش</a>
              <a href="#">شامپو کودک و نوزاد</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>پوشاک و کفش کودک و نوزاد</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لباس کودک و لباس نوزادی</a>
              <a href="#">کفش</a>
              <a href="#">کفش ورزشی</a>
              <a href="#">جوراب و پاپوش کودک نوزاد</a>
              <a href="#">کلاه و پیشبند نوزاد</a>
              <hr />
            </section>
            <a href="#" className="exception">
              تبلت
            </a>
            <a href="#" className="exception">
              پلی استیشن ، ایکس باکس و بازی
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>اسباب بازی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">فکری و آموزشی</a>
              <a href="#">پازل ، لگو و ساختنی</a>
              <a href="#">عروسک و فیگور</a>
              <a href="#">اسپینر ، ابزار شوخی و سرگرمی</a>
              <a href="#">تفنگ ، تیر و لوازم بازی جنگی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>بازی و سرگرمی کودک</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">ماشین بازی ، موتور ، سه چرخه</a>
              <a href="#">دوچرخه</a>
              <a href="#">تشک بازی و پارک بازی</a>
              <a href="#">تاب و سرسره</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>سلامت ، ایمنی و مراقبت</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">تصفیه هوا</a>
              <a href="#">ترازو</a>
              <a href="#">دوربین و پیجر اتاق کودک</a>
              <a href="#">تب سنج و دماسنج</a>
              <a href="#">محافظ و ابزار ایمنی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>خواب کودک</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">مبلمان اتاق کودک</a>
              <a href="#">چراغ خواب کودک</a>
              <a href="#">تشک کودک</a>
              <a href="#">سرویس خواب</a>
              <a href="#">پتو</a>
              <a href="#">بالش شیردهی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ملزومات گردش و سفر</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کالسکه و کریر</a>
              <a href="#">صندلی خودرو کودک و نوزاد</a>
              <a href="#">ساک لوازم نوزاد</a>
              <a href="#">لوازم جانبی گردش و سفر</a>
              <a href="#">آغوشی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم شخصی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">پستانک و ملزومات</a>
              <a href="#">شیردوش</a>
              <a href="#">شورت آموزشی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>غذا خوری</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">صتدلی غذا خوری</a>
              <a href="#">شیشه شیر ، سرلاک ، داروخوری</a>
              <hr />
            </section>
          </section>
          {/* Products Category 7 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>محصولات بومی و محلی</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>خوراکی های بومی محلی </span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">حلوا ، شکری ، ارده و کنجد</a>
              <a href="#">خرمای محلی</a>
              <a href="#">عسل محلی</a>
              <a href="#">عرقیات و گلاب اصیل</a>
              <a href="#">ادویه و چاشنی محلی</a>
              <a href="#">چای محلی</a>
              <a href="#">زعفران ، زرشک و تزئینات غذا</a>
              <a href="#">سبزی خشک محلی</a>
              <a href="#">حبوبات و سویا محلی</a>
              <a href="#">قند و نبات محلی</a>
              <a href="#">ماهی تازه</a>
              <a href="#">روغن محلی</a>
              <hr />
            </section>
            <a href="#" className="exception">
              خانه و کاشانه بومی محلی
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ظروف سنتی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کاسه و کاسه بشقاب سنتی</a>
              <a href="#">بشقاب سنتی</a>
              <a href="#">پارچ سنتی</a>
              <a href="#">لیوان سنتی</a>
              <a href="#">قندان سنتی</a>
              <a href="#">دیگ و قابلمه سنتی</a>
              <a href="#">شکلات خوری دست ساز</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ابزار آشپزخانه سنتی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">دیس و سینی سنتی</a>
              <a href="#">تخته سرو سنتی</a>
              <a href="#">سبد دستبافت سنتی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>دکوراتیو سنتی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">آویز سرپرده سنتی</a>
              <a href="#">کیس و کاور سنتی</a>
              <a href="#">گلدان سنتی</a>
              <a href="#">مجسمه سنتی</a>
              <a href="#">چراغ خواب و آباژور</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>خواب و حمام</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کوسن سنتی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>انواع قالی و قالیچه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">گلیم</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>پوشیدنی های بومی محلی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">پوشاک بومی و محلی</a>
              <a href="#">اکسسوری بومی و محلی</a>
              <hr />
            </section>
          </section>
          {/* Products Category 8 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>زیبایی و سلامت</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم آرایشی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">آرایش چشم و ابرو</a>
              <a href="#">آرایش لب</a>
              <a href="#">آرایش صورت</a>
              <a href="#">مواد آرایش مو</a>
              <a href="#">سنگ پا ، بهداشت و زیبایی ناخن</a>
              <a href="#">تجهیزات جانبی آرایشی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم بهداشتی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کرم و مراقبت پوست</a>
              <a href="#">شامپو و مراقبت مو</a>
              <a href="#">بهداشت دهان و دندان</a>
              <a href="#">بهداشت و مراقبت بدن</a>
              <a href="#">ضد تعریق</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم شخصی برقی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">ماشین اصلاح صورت</a>
              <a href="#">ماشین اصلاح سر</a>
              <a href="#">سشوار</a>
              <a href="#">اصلاح بدن آقایان</a>
              <a href="#">اصلاح بدن بانوان</a>
              <a href="#">اصلاح موی گوش ، بینی و ابرو</a>
              <a href="#">برس پاک سازی</a>
              <a href="#">اتو مو و حالت دهنده</a>
              <a href="#">بیگودی و فر کننده</a>
              <a href="#">مسواک برقی</a>
              <a href="#">لیزر</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>عطر ، ادکلن ، اسپری و ست</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">مردانه</a>
              <a href="#">زنانه</a>
              <a href="#">جیبی</a>
              <a href="#">اسپری</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>طلا ، نقره و زیورآلات زنانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">زیورآلات نقره زنانه</a>
              <a href="#">زیورآلات طلا زنانه</a>
              <a href="#">حلقه و انگشتر طلای زنانه</a>
              <a href="#">دستبند طلا زنانه</a>
              <a href="#">گردنبند طلا زنانه</a>
              <a href="#">گوشواره طلا زنانه</a>
              <hr />
            </section>
            <a href="#">زیورآلات نقره مردانه</a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ابزار سلامت و طبی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">مچ بند و ساعت هوشمند</a>
              <a href="#">ترازو</a>
              <a href="#">کالای خواب و استراحت طبی</a>
              <a href="#">تست قند خون</a>
              <a href="#">تب سنج</a>
              <a href="#">فشار سنج</a>
              <a href="#">ابزار مراقبت پا</a>
              <a href="#">نمایشگر ضربان قلب</a>
              <a href="#">ماساژور</a>
              <a href="#">تشک و پتوی برقی</a>
              <a href="#">ویلچر</a>
              <hr />
            </section>
          </section>
          {/* Products Category 9 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>خانه و آشپزخانه</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>تلویزیون</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">ایکس ویژن</a>
              <a href="#">جی پلاس</a>
              <a href="#">دوو</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>دکوراتیو</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">مبلمان خانگی</a>
              <a href="#">دکوراسیون اداری</a>
              <a href="#">آینه</a>
              <a href="#">پرده</a>
              <a href="#">تابلو</a>
              <a href="#">ساعت دیواری و رومیزی</a>
              <a href="#">شمع ، گل و گلدان</a>
              <hr />
            </section>
            <a href="#" className="exception">
              فرش ماشینی ، دستبافت ، تابلو
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم برقی خانگی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">یخچال و فریزر</a>
              <a href="#">ماشین لباسشویی</a>
              <a href="#">هود</a>
              <a href="#">گاز صفحه ای</a>
              <a href="#">اجاق گاز</a>
              <a href="#">اجاق گاز</a>
              <a href="#">مایکروویو ، مایکروفر</a>
              <a href="#">فر</a>
              <a href="#">جاروبرقی</a>
              <a href="#">جارو شارژری</a>
              <a href="#">تلفن ، بی سیم و سانترال</a>
              <a href="#">کولر ، پنکه ، تصفیه هوا</a>
              <a href="#">قهوه و چای ساز ، آب میوه گیر</a>
              <a href="#">اتو بخار و پرسی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>حیوانات خانگی ، غذا و لوازم</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">آکواریوم ، غذا و لوازم آبزیان</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>سرو و پذیرایی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">سرویس غذا خوری</a>
              <a href="#">قاشق ، چنگال و کارد</a>
              <a href="#">پارچ ، بطری ، لیوان و ماگ</a>
              <a href="#">ظروف پذیرایی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>نور و روشنایی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لامپ ، چراغ و ریسه</a>
              <a href="#">لوستر و چراغ تزیینی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>آشپزخانه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">سرویس و ظروف پخت و پز</a>
              <a href="#">فلاسک و کلمن</a>
              <a href="#">کتری ، قوری ، لوازم سرو چای</a>
              <a href="#">ظروف یکبار مصرف</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>مواد شوینده</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">شوینده ظروف</a>
              <a href="#">شوینده لباس</a>
              <a href="#">تمیز کننده سطوح</a>
              <hr />
            </section>
            <a href="#" className="exception">
              دستمال کاغذی
            </a>
            <a href="#" className="exception">
              ملحفه ، سرویس ، لوازم خواب
            </a>
            <a href="#" className="exception">
              حوله و وسایل حمام
            </a>
            <a href="#" className="exception">
              پادری ، کمد ، لوازم اتاق خواب
            </a>
            <a href="#" className="exception">
              لوازم دستشویی و روشویی
            </a>
            <a href="#" className="exception">
              فندک و لوازم جانبی
            </a>
            <a href="#" className="exception">
              گل ، خاک ، کود ، لوازم باغبانی
            </a>
          </section>
          {/* Products Category 10 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>کتاب ، لوازم تحریر و هنر</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>کتاب و مجله</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کتاب چایی</a>
              <a href="#">مجلات خارجی و داخلی</a>
              <hr />
            </section>
            <a href="#" className="exception">
              کتاب صوتی
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>محتوای آموزشی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">آموزش موسیقی</a>
              <a href="#">آموزش ورزش و سرگرمی</a>
              <a href="#">آموزش زبان</a>
              <a href="#">آموزش نرم افزار و کامپیوتر</a>
              <hr />
            </section>
            <a href="#" className="exception">
              نرم افزار
            </a>
            <a href="#" className="exception">
              بازی کنسول و کامپیوتر
            </a>
            <a href="#" className="exception">
              فیلم سینمایی ، سریال و مستند
            </a>
            <a href="#" className="exception">
              آلبوم موسیقی
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>لوازم التحریر</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لوازم اداری و اقلام مصرفی</a>
              <a href="#">کیف ، کوله پشتی و جامدادی</a>
              <a href="#">چراغ مطالعه</a>
              <a href="#">کاغذ کادو ، پاکت و کارت هدیه</a>
              <a href="#">نوشت افزار</a>
              <a href="#">دفتر و کاغذ</a>
              <a href="#">خودکار و روان نویس</a>
              <a href="#">ابزار نقاشی و رنگ آمیزی</a>
              <a href="#">میز تحریر</a>
              <a href="#">آلبوم عکس</a>
              <a href="#">کاغذ چاپ و پرینتر</a>
              <a href="#">مداد و مدادرنگی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>آلات موسیقی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لوازم جانبی ادوات موسیقی</a>
              <a href="#">گیتار </a>
              <a href="#">کیبورد و ارگ</a>
              <a href="#">پیانو دیجیتال</a>
              <a href="#">درام ، پرکاشن و دف</a>
              <a href="#">تجهیزات استودیویی</a>
              <a href="#">ویولن</a>
              <a href="#">سازهای ایرانی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>فرش ماشینی ، دستبافت ، تابلو</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">فرش ماشینی</a>
              <a href="#">فرش دستباف</a>
              <a href="#">تابلو فرش</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>صنایع دستی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کالا های مسی</a>
              <a href="#">سفال ، سرامیک و چینی</a>
              <a href="#">کیف چرمی</a>
              <a href="#">ترمه ، قلمکار و دستبافت</a>
              <a href="#">خاتم ، منبت ، حصیری و چوبی</a>
              <a href="#">تابلو و ساعت</a>
              <a href="#">میناکاری</a>
              <a href="#">فیروزه کوبی</a>
              <a href="#">سوزن دوزی</a>
              <a href="#">محصولات استخوانی</a>
              <a href="#">جعبه و دست سازه های هنری</a>
              <hr />
            </section>
          </section>
          {/* Products Category 11 */}
          <div onClick={(e) => toggleHandler(e)} className="category-items">
            <HiChevronDown className="icons" />
            <span>ورزش و سفر</span>
          </div>
          <section>
            <a href="#">
              <HiChevronLeft />
              <span>همه موارد این دسته</span>
            </a>
            <a href="#" className="exception">
              پوشاک ورزشی مردانه
            </a>
            <a href="#" className="exception">
              پوشاک ورزشی زنانه
            </a>
            <a href="#" className="exception">
              کفش ورزشی مردانه
            </a>
            <a href="#" className="exception">
              کفش ورزشی زنانه
            </a>
            <a href="#" className="exception">
              پوشاک ورزشی پسرانه
            </a>
            <a href="#" className="exception">
              پوشاک ورزشی دخترانه
            </a>
            <a href="#" className="exception">
              کفش ورزشی پسرانه
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>تجهیزات سفر</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">چمدان و ساک</a>
              <a href="#">کیف و کوله پشتی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>دوچرخه</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">لوازم جانبی دوچرخه</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>کوهنوردی و کمپینگ</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">کفش کوهنوردی</a>
              <a href="#">عصای کوهنوردی</a>
              <a href="#">چراغ قوه و چراغ پیشانی</a>
              <a href="#">چاقو و ابزار چند کاره</a>
              <a href="#">قمقمه و فلاسک</a>
              <a href="#">چادر</a>
              <a href="#">کیسه خواب</a>
              <a href="#">زیر انداز سفری</a>
              <hr />
            </section>
            <a href="#" className="exception">
              کفش ورزشی دخترانه
            </a>
            <a href="#" className="exception">
              لوازم جانبی کوهنوردی و سفر
            </a>
            <a href="#" className="exception">
              چتر
            </a>
            <a href="#" className="exception">
              ساک ورزشی
            </a>
            <a href="#" className="exception">
              قمقمه و شیکر
            </a>
            <a href="#" className="exception">
              لوازم ورزشی
            </a>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ورزش های هوازی و بدنسازی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">تجهیزات جانبی ایروبیک و تناسب اندام</a>
              <a href="#">دمبل</a>
              <a href="#">طناب</a>
              <a href="#">بارفیکس</a>
              <a href="#">تردمیل</a>
              <a href="#">لوازم پوششی و محافظتی ورزشی</a>
              <hr />
            </section>
            <div
              onClick={(e) => toggleHandler(e)}
              className="category-items inside"
            >
              <HiChevronDown className="icons" />
              <span>ورزش های توپی</span>
            </div>
            <section>
              <a href="#">
                <HiChevronLeft />
                <span>همه موارد این دسته</span>
              </a>
              <a href="#">توپ</a>
              <a href="#">راکت</a>
              <hr />
            </section>
            <a href="#" className="exception">
              ورزش های آبی
            </a>
            <a href="#" className="exception">
              ورزش های رزمی
            </a>
            <a href="#" className="exception">
              اسکوتر برقی
            </a>
            <a href="#" className="exception">
              اسکیت و اسکوتر
            </a>
          </section>
        </section>
      </aside>
      <div
        onClick={() => onHide()}
        className={`backdrop ${show && "backdrop-show"} `}
      ></div>
    </>
  );
};

export default MenuMobile;
