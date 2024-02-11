import React from "react";
import "./Footer.scss";
import { HiChevronLeft, HiChevronUp } from "react-icons/hi";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <section className="section-go-up-and-logo">
          <button onClick={() => scrollUp()}>
            بازگشت به بالا
            <HiChevronUp className="icon" />
          </button>
          <div className="logo">
            <img
              src="https://www.digikala.com/statics/img/svg/digi.svg"
              alt=""
            />
          </div>
        </section>
        <section className="details-support">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <div className="line">|</div>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </section>
        <section className="digikala-option">
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/original-products.svg"
                alt=""
              />
            </div>
            <p>ضمانت اصل بودن کالا</p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/days-return.svg"
                alt=""
              />
            </div>
            <p>هفت روز ضمانت بازگشت کالا</p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/support.svg"
                alt=""
              />
            </div>
            <p>7 روز هفته ، 24 ساعته</p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg"
                alt=""
              />
            </div>
            <p>امکان پرداخت در محل</p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg"
                alt=""
              />
            </div>
            <p>امکان تحویل اکسپرس</p>
          </a>
        </section>
        <section className="register-and-questions">
          <div className="question-box">
            <h4>با دیجی‌کالا</h4>
            <a href="#">اتاق خبر دیجی کالا</a>
            <a href="#">فروش در دیجی کالا</a>
            <a href="#">فرصت های شغلی</a>
            <a href="#">گزارش تخلف در دیجی کالا</a>
            <a href="#">تماس با دیجی کالا</a>
            <a href="#">درباره دیجی کالا</a>
          </div>
          <div className="question-box">
            <h4>خدمات مشتریان</h4>
            <a href="#">پاسخ به پرسش های متداول</a>
            <a href="#">رویه های بازگرداندن کالا</a>
            <a href="#">شرایط استفاده</a>
            <a href="#">حریم خصوصی</a>
            <a href="#">گزارش باگ</a>
          </div>
          <div className="question-box hidden">
            <h4>راهنمای خرید از دیجی‌کالا</h4>
            <a href="#">نحوه ثبت سفارش</a>
            <a href="#">رویه ارسال سفارش</a>
            <a href="#">شیوه های پرداخت</a>
          </div>
          <div className="register-box">
            <div>
              <h3>همراه ما باشید !</h3>
              <div className="social-networks-container">
                <span>
                  <IoLogoInstagram />
                </span>
                <span>
                  <IoLogoLinkedin />
                </span>
                <span>
                  <IoLogoTwitter />
                </span>
                <span>
                  <IoLogoWhatsapp />
                </span>
              </div>
            </div>
            <div>
              <h3 className="hidden">
                با ثبت نام ایمیل ، از جدیدترین تخفیف ها با خبر شوید
              </h3>
              <form action="#">
                <input type="email" placeholder="ایمیل شما" />
                <button>ثبت</button>
              </form>
            </div>
          </div>
        </section>
        <div className="install-app-container">
          <div className="title">
            <div>دانلود اپلیکیشن دیجی کالا</div>
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/png/footerlogo2.png"
                alt=""
              />
            </div>
          </div>
          <div className="installation-methods-box">
            <div className="img-container hidden">
              <img
                src="https://www.digikala.com/statics/img/svg/More.svg"
                alt=""
              />
            </div>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/svg/appStores/myket.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/svg/appStores/google-play.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="more-information-box">
            <a href="#">
              اطلاعات بیشتر
              <HiChevronLeft />
            </a>
          </div>
        </div>
        <section className="about-digikala">
          <div>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://trustseal.enamad.ir/logo.aspx?id=19077&Code=sScdOJOzhFxtcEqkjP7P"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/png/kasbokar.png"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/png/rezi.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="description">
            <h5>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h5>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
            <a href="#">
              مشاهده بیشتر
              <HiChevronLeft className="icon" />
            </a>
          </div>
        </section>
        <div className="digikala-rights">
          <p>
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </p>
        </div>
      </div>
      <div className="companies">
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digiMehr.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/magnet.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/jet.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digiclub.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digiplus.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digistyle.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digipay.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digikala-business.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/smartech.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digify.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/ganjeh.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digiexpress.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/komodaa.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/pindo.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/diginext.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className="img-container">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/fidibo.svg"
              alt=""
            />
          </div>
        </a>
      </div>
    </footer>
  );
}
