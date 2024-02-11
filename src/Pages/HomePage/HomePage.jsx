import React from "react";
import { HiArrowLeft, HiChevronLeft } from "react-icons/hi";
import BestsellingProducts from "../../Components/Bestselling Products/BestsellingProducts";
import DiscountedProducts from "../../Components/Discounted Products/DiscountedProducts";
import HeaderSlider from "../../Components/Header Slider/HeaderSlider";
import MoreServices from "../../Components/More Services/MoreServices";
import PopularBrandsSlider from "../../Components/Popular Brands Slider/PopularBrandsSlider";
import Products1 from "../../Components/Products 1/Products1";
import Products2 from "../../Components/Products 2/Products2";
import ProductsSlider from "../../Components/Products Slider/ProductsSlider";
import SuggestionSlider from "../../Components/Suggestion Slider/SuggestionSlider";
import Layout from "../../Layout/Layout/Layout";
import ChangerNumToPersian from "../../Utils/ChangerNumToPersian";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <Layout>
      <HeaderSlider />
      <main className=" main-container-home max-width">
        <MoreServices />
        <ProductsSlider />
        {/* Amazing SuperMArket */}
        <a href="#" className="amazing-supermarket margin">
          <header>
            <div className="hidden">تا {ChangerNumToPersian(45)}% تخفیف</div>
            <div>
              <img
                src="https://www.digikala.com/statics/img/svg/typography/fresh.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.digikala.com/statics/img/png/amazing/fresh.png"
                alt=""
              />
            </div>
          </header>
          <main>
            <span className="icon">
              <HiArrowLeft className="HiArrowLeft" />
              <span className="hidden">
                بیش از {ChangerNumToPersian(80)} کالا
              </span>
            </span>
            <div id="container-amazing-product">
              <a href="#">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/ae78fb796f625cb20ca9c28c77c0eed2c06b56ac_1605349422.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                    alt=""
                  />
                </div>
                <span>{ChangerNumToPersian(23)}%</span>
              </a>
              <a href="#">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/487004.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                    alt=""
                  />
                </div>
                <span>{ChangerNumToPersian(24)}%</span>
              </a>
              <a href="#">
                <div>
                  <img
                    src="https://dkstatics-private.digikala.com/digikala-products/64fec45948d6dd13cbce990aa9054925a6b2be48_1630934585.jpg?OSSAccessKeyId=LTAIPClJziKGRUZJ&Expires=1941974586&Signature=CVmz9QHFjx4vmMIpiXz%2BliQpTuA%3D"
                    alt=""
                  />
                </div>
                <span>{ChangerNumToPersian(20)}%</span>
              </a>
              <a href="#" className="hidden">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/30751c5a8ea2d01becf73655dedb5052918cdad2_1603794462.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                    alt=""
                  />
                </div>
                <span>{ChangerNumToPersian(19)}%</span>
              </a>
              <a href="#" className="hidden">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/364b2ab23ce093714399372a49fc19dab93d75e6_1629190673.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                    alt=""
                  />
                </div>
                <span>{ChangerNumToPersian(18)}%</span>
              </a>
              <a href="#" className="hidden">
                <div>
                  <img
                    src="https://dkstatics-public.digikala.com/digikala-products/2075925.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                    alt=""
                  />
                </div>
                <span>{ChangerNumToPersian(10)}%</span>
              </a>
            </div>
          </main>
        </a>
        {/* suggestion Image */}
        <section className=" suggestion-container margin">
          <a href="#">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/62272379e825d1dcbc791fb324a63294da799b33_1672478434.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4355945a3ff60f3dbe6a6d31fdb86bba0281aaa6_1668268672.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3c9ff73420a382f980ec869d7c73ba9b009e83ac_1672223171.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/62dc01c20d721ce5d8164f3d60b58a059f948faf_1672398788.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </a>
        </section>
        {/* Digikala Category */}
        <section className="category-container margin">
          <h3>دسته بندی های دیجی کالا</h3>
          <main>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png"
                  alt=""
                />
              </div>
              <p>اسباب بازی ، کودک و نوزاد</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png"
                  alt=""
                />
              </div>
              <p>کالاهای سوپرمارکتی</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png"
                  alt=""
                />
              </div>
              <p>مد و پوشاک</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png"
                  alt=""
                />
              </div>
              <p>خودرو ، ابزار و تجهیزات صنعتی</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png"
                  alt=""
                />
              </div>
              <p>موبایل</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png"
                  alt=""
                />
              </div>
              <p>کالای دیجیتال</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png"
                  alt=""
                />
              </div>
              <p>ورزش و سفر</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png"
                  alt=""
                />
              </div>
              <p>کتاب ، لوازم تحریر و هنر</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png"
                  alt=""
                />
              </div>
              <p>خانه و آشپزخانه</p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png"
                  alt=""
                />
              </div>
              <p>زیبایی و سلامت </p>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png"
                  alt=""
                />
              </div>
              <p>محصولات بومی و محلی</p>
            </a>
          </main>
          <section className="img-section-1">
            <div>
              <img
                src="https://dkstatics-public.digikala.com/digikala-adservice-banners/dc2a27ca344229e2d11d4e97595fa0e7f5dd1877_1672232175.jpg?x-oss-process=image/quality,q_95"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9e83f35cf776c7448303955609e1bc6c53aec796_1672228489.jpg?x-oss-process=image/quality,q_95"
                alt=""
              />
            </div>
          </section>
        </section>
        <SuggestionSlider />
        <PopularBrandsSlider />
        <section className="img-section-2 margin">
          <div>
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d5186195d5cfbde723226735a1077019e20ed9a3_1672223742.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/ccf429b44cea826989f5cda8a614d8ac0f94d772_1672227248.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </div>
        </section>
        {/* Products 1 */}
        <Products1 />
        {/* DigiPlus */}
        <section className="digi-plus-container margin-1024">
          <div className="digi-plus-intro">
            <div>
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg"
                  alt=""
                />
              </div>
              <p>خدمات ویژه برای اعضای دیجی پلاس</p>
              <a href="#">
                <HiArrowLeft className="icon" />
                عضویت
              </a>
            </div>
          </div>
          <div className="digi-plus-box">
            <div>
              <div className="digi-plus-items-header">
                <a href="#">
                  <HiChevronLeft className="icon" />
                  مشاهده همه
                </a>
                <span>ارسال فوری</span>
              </div>
              <main>
                <div className="product-digi-plus">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/41ac8b85c8f27d369e939dc4c2f84c97d8c0691a_1650858427.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/114356296.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus exception ">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/e10938a8268399a90fdae8e245015cf765753be4_1613486389.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus exception ">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/f7695f5537bd17fe62ff59b92cf3574ecfaece4b_1656422164.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus exception ">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/50e70cb79e33843c55efd6e60985f914716ac8ef_1627128170.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </main>
            </div>
            <div>
              <div className="digi-plus-items-header">
                <a href="#">
                  <HiChevronLeft className="icon" />
                  مشاهده همه
                </a>
                <span>هدیه نقدی</span>
              </div>
              <main>
                <div className="product-digi-plus">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/6de67c3df626f9a133a3aa41815b9d7b7619cc60_1665829192.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/06aaa82b2af4b71992683701769b0afa4fa169bf_1666160815.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/f7695f5537bd17fe62ff59b92cf3574ecfaece4b_1656422164.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus exception">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/e477016feaff5a6e6cf930517134eb3888c887ef_1656404674.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus exception ">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/6d0ac0a28c34c29f7dd3019caef0fdb376afefb2_1664877785.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="product-digi-plus exception ">
                  <a href="#">
                    <div className="img-container">
                      <img
                        src="https://dkstatics-public.digikala.com/digikala-products/2374121ea75f79c13d96dc8b04a6f4fd2e160fee_1656430045.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </main>
            </div>
          </div>
        </section>
        {/* DigiClub */}
        <section className="digiclub-container margin-1024">
          <div className="digiclub-logo-container">
            <div className="digiclub-logo">
              <img
                src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg"
                alt=""
              />
            </div>
          </div>
          <div className="digiclub-items-container">
            <div>
              <a href="#" className="digiclub-items">
                <span>چرخ و بخت</span>
                <div className="img-container">
                  <img
                    src="https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.jpg"
                    alt=""
                  />
                </div>
              </a>
              <a href="#" className="digiclub-items">
                <span>ماموریت ها</span>
                <div className="img-container">
                  <img
                    src="https://www.digikala.com/statics/img/png/digiclub/missions.png"
                    alt=""
                  />
                </div>
              </a>
              <a href="#" className="digiclub-items">
                <span>جایزه ها</span>
                <div className="img-container">
                  <img
                    src="https://www.digikala.com/statics/img/png/digiclub/awards.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* Products 2 */}
        <Products2 />
        {/* Bestselling Products */}
        <BestsellingProducts />
        {/* Imgae */}
        <div className="margin border-radius">
          <picture>
            <source
              srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/8b68b7912e11dbcfbeba2bdea8fe3c0c81946cff_1672493705.jpg?x-oss-process=image/quality,q_95"
              media="(min-width:1024px)"
            />
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c2a0f706b26604d206bf5e82db00f88a0cb49699_1672493706.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </picture>
        </div>
        {/* DiscountedProducts */}
        <DiscountedProducts />
        {/* Reading */}
        <section className="reading-container margin">
          <header className="reading-header">
            <h4>خواندنی ها</h4>
            <a href="#">
              مطالب بیشتر در دیجی کلا مگ
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <main>
            <a href="#" className="reading-items">
              <div className="reading-img-container">
                <img
                  src="https://www.digikala.com/mag/wp-content/uploads/2023/01/10.06-13-610x380.jpg"
                  alt=""
                />
              </div>
              <div className="description-box">
                <p>
                  بررسی ماوس ریزر DEATHDDER ESSENTIAL RZ01 ، خوش قیمت و مناسب
                  طرفداران ریزر
                </p>
              </div>
            </a>
            <a href="#" className="reading-items">
              <div className="reading-img-container">
                <img
                  src="https://www.digikala.com/mag/wp-content/uploads/2023/01/Phone-connect-to-TV-3-610x380.jpg"
                  alt=""
                />
              </div>
              <div className="description-box">
                <p>چطور گوشی و تبلت را با کابل USB به تلویزیون وصل کنیم ؟</p>
              </div>
            </a>
            <a href="#" className="reading-items">
              <div className="reading-img-container">
                <img
                  src="https://www.digikala.com/mag/wp-content/uploads/2023/01/10.06-5-610x380.jpg"
                  alt=""
                />
              </div>
              <div className="description-box">
                <p>بررسی کیبورد تسکو TK 8021L ، قیمت پایین و فراتر از انتظار</p>
              </div>
            </a>
            <a href="#" className="reading-items">
              <div className="reading-img-container">
                <img
                  src="https://www.digikala.com/mag/wp-content/uploads/2023/01/Untitled-2-1-610x380.jpg"
                  alt=""
                />
              </div>
              <div className="description-box">
                <p>
                  بررسی فلش مموری سن دیسک Cruzer Blade CZ50 ، سرعت معمولی ،
                  طراحی جذاب !
                </p>
              </div>
            </a>
          </main>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
