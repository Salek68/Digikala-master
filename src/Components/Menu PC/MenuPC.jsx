import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import "./MenuPC.scss";

export default function MenuPC({ show, setShow }) {
  const hoverHandler = (e) => {
    let index = e.target.getAttribute("index");

    // Get Elements
    const categoryMainContainer = document.querySelectorAll(
      ".category-main-container"
    );
    const asideItems = document.querySelectorAll("div[index]");

    // Remove Class
    categoryMainContainer.forEach((container) =>
      container.classList.remove("active")
    );
    asideItems.forEach((item) => item.classList.remove("active"));

    // Add Class
    categoryMainContainer[index].classList.add("active");
    asideItems[index].classList.add("active");
  };


  return (
    <div
      className={` backdrop-menu-PC ${show && "open"}`}
      onMouseOver={(e) => e.stopPropagation()}
    >
      <div className="container-menu-PC" onMouseLeave={() => setShow(false)}>
        {/* Aside */}
        <aside className="aside-PC">
          <div
            index="0"
            onMouseEnter={(e) => hoverHandler(e)}
            className="active"
          >
            موبایل
          </div>
          <div index="1" onMouseEnter={(e) => hoverHandler(e)}>
            کالای دیجیتال
          </div>
          <div index="2" onMouseEnter={(e) => hoverHandler(e)}>
            خودرو ، ابزار و تجهیزات صنعتی
          </div>
          <div index="3" onMouseEnter={(e) => hoverHandler(e)}>
            مد و پوشاک
          </div>
          <div index="4" onMouseEnter={(e) => hoverHandler(e)}>
            کالاهای سوپرمارکتی
          </div>
          <div index="5" onMouseEnter={(e) => hoverHandler(e)}>
            اسباب بازی ، کودک و نوزاد
          </div>
          <div index="6" onMouseEnter={(e) => hoverHandler(e)}>
            محصولات بومی و محلی
          </div>
          <div index="7" onMouseEnter={(e) => hoverHandler(e)}>
            زیبایی و سلامت
          </div>
          <div index="8" onMouseEnter={(e) => hoverHandler(e)}>
            خانه و آشپزخانه
          </div>
          <div index="9" onMouseEnter={(e) => hoverHandler(e)}>
            کتاب ، لوازم تحریر و هنر
          </div>
          <div index="10" onMouseEnter={(e) => hoverHandler(e)}>
            ورزش و سفر
          </div>
        </aside>
        {/* Products Category 1 */}
        <div className="category-main-container active">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات موبایل</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <a href="#">دو سیم کارت</a>
              <a href="#"> (اندروید) Android</a>
              <a href="#">IOS</a>
              <a href="#">سایر سیستم عامل ها</a>
            </section>
            <section className="category">
              <a href="#">تا 13 مگاپیکسل</a>
              <a href="#">تا 16 مگاپیکسل</a>
              <a href="#">تا 48 مگاپیکسل</a>
              <a href="#">تا 64 مگاپیکسل</a>
              <a href="#">تا 108 مگاپیکسل</a>
              <h3>گوشی بر اساس کاربری</h3>
              <a href="#">گوشی اقتصادی</a>
              <a href="#">گوشی میان رده </a>
              <a href="#">گوشی دانش آموزی</a>
              <a href="#">گوشی گیمینگ</a>
              <a href="#">گوشی پرچمدار</a>
              <a href="#">گوشی ضد آب</a>
              <a href="#">گوشی مناسب عکاسی</a>
              <a href="#">گوشی 5 G</a>
            </section>
            <section className="category">
              <h3>گوشی بر اساس قیمت</h3>
              <a href="#">گوشی تا 2 میلیون تومان</a>
              <a href="#">گوشی تا 5 میلیون تومان</a>
              <a href="#">گوشی تا 7 میلیون تومان</a>
              <a href="#">گوشی تا 15 میلیون تومان</a>
              <a href="#">گوشی بالای 15 میلیون تومان</a>
              <h3>گوشی بر اساس حافظه داخلی</h3>
              <a href="#">گوشی تا 16 گیگابایت</a>
              <a href="#">گوشی تا 32 گیگابایت</a>
              <a href="#">گوشی تا 64 گیگابایت</a>
              <a href="#">گوشی تا 128 گیگابایت</a>
              <a href="#">گوشی تا 256 گیگابایت</a>
              <a href="#">گوشی تا 1 ترابایت</a>
              <h3>رزولوشن عکس</h3>
            </section>
            <section className="category">
              <h3>برند های مختلف گوشی موبایل</h3>
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
            </section>
          </section>
        </div>
        {/* Products Category 2 */}
        <div className="category-main-container ">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات کالای دیجیتال</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <h3>تبلت</h3>
              <h3>شارژر تبلت و موبایل</h3>
              <h3>کیف ، کاور ،لوازم جانبی تبلت</h3>
              <h3>باتری</h3>
              <h3>دوربین های تحت شبکه</h3>
              <h3>مودم و تجهیزات</h3>
              <h3>ماشین های اداری</h3>
              <a href="#">تلفن ، بی سیم و سانترال</a>
              <a href="#">فکس</a>
              <a href="#">پرینتر</a>
              <a href="#">لوازم جانبی اداری</a>
              <h3>کتابخوان فیدیبوک</h3>
              <h3>کارت هدیه خرید از دیجی کالا</h3>
            </section>
            <section className="category">
              <h3>تلسکوپ</h3>
              <h3>پلی استیشن ، ایکس باکس و بازی</h3>
              <h3>کامپیوتر و تجهیزات جانبی</h3>
              <a href="#">تجهیزات مخصوص بازی</a>
              <a href="#">مانیتور</a>
              <a href="#">کیس های اسمبل شده</a>
              <a href="#">قطعات داخلی کامپیوتر</a>
              <a href="#">ماوس</a>
              <a href="#">کیبورد</a>
              <h3>لپ تاپ</h3>
              <h3>لوازم جانبی لپ تاپ</h3>
              <a href="#">کیف ، کوله و کاور</a>
              <a href="#">کابل صدا ، AUX و HDMI</a>
            </section>
            <section className="category">
              <h3>هدفون ، هدست ، هندزفری</h3>
              <h3>اسپیکر بلوتوث و با سیم</h3>
              <h3>هارد ، فلش و SSD</h3>
              <h3>دوربین</h3>
              <a href="#">دوربین عکاسی دیجیتال</a>
              <a href="#">دوربین ورزشی و فیلم برداری</a>
              <a href="#">دوربین چاپ سریع</a>
              <h3>لوازم جانبی دوربین</h3>
              <a href="#">لنز</a>
              <a href="#">کیف</a>
              <a href="#">کارت حافظه</a>
              <a href="#">کاغذ چاپ عکس</a>
              <h3>دوربین دو چشمی و شکاری</h3>
            </section>
            <section className="category">
              <h3>لوازم جانبی گوشی</h3>
              <a href="#">کیف و کاور گوشی</a>
              <a href="#">(شارژر همراه ) پاور بانک</a>
              <a href="#">پایه نگهدارنده گوشی</a>
              <h3>گوشی موبایل</h3>
              <a href="#">اپل</a>
              <a href="#">سامسونگ</a>
              <a href="#">شیایومی</a>
              <a href="#">نوکیا</a>
              <a href="#">هواوی</a>
              <a href="#">آنر</a>
              <h3>واقیعت مجازی</h3>
              <h3>مچ بند و ساعت هوشمند</h3>
            </section>
          </section>
        </div>
        {/* Products Category 3 */}
        <div className="category-main-container ">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات خودرو ، ابزار و تجهیزات صنعتی</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <a href="#">بذر و تخم گیاهان</a>
              <a href="#">تبر ، بیل و کلنگ</a>
              <a href="#">خاک ، کود و آفت کش</a>
              <h3>نور و روشنایی</h3>
              <a href="#">لوستر آباژور</a>
              <a href="#">لامپ</a>
              <a href="#">چند راهی برق و محافظ ولتاژ</a>
              <h3>تجهیزات ایمنی و کار</h3>
              <a href="#">کفش ایمنی</a>
              <h3>حفاظتی و امنیتی</h3>
              <a href="#">گاوصندق</a>
            </section>
            <section className="category">
              <a href="#">ابزار دستی</a>
              <a href="#">مجموعه ابزار</a>
              <a href="#">نردبان</a>
              <a href="#">پیچ گوشتی و فازمتر</a>
              <a href="#">نظم دهنده ابزار</a>
              <a href="#">متر ، تراز ، اندازه گیری دقیق</a>
              <a href="#">لوازم روانکاری</a>
              <a href="#">چسب صنعتی</a>
              <h3>لوازم و یراق آلات ساختمانی</h3>
              <a href="#">شیرآلات</a>
              <a href="#">رنگ</a>
              <a href="#">دستگیره در</a>
              <h3>لوازم باغبانی</h3>
              <a href="#">قیچی ، چاقو و ابزار باغبانی</a>
            </section>
            <section className="category">
              <h3>لوازم مصرفی خودرو و موتورسیکلت</h3>
              <a href="#">لاستیک و تایر</a>
              <a href="#">لنت ترمز</a>
              <a href="#">روغن موتور و ضد یخ</a>
              <a href="#">مکمل سوخت و روغن و انواع فیلتر</a>
              <h3>ابزار برقی</h3>
              <a href="#">دریل ، پیچ گوشتی برقی و شارژی</a>
              <a href="#">فرز و سنگ رومیزی</a>
              <a href="#">موتور برق</a>
              <a href="#">مکنده د دمنده</a>
              <a href="#">کارواش</a>
              <a href="#">کمپرسور و جک خودرو</a>
              <a href="#">ایزار همه کاره برقی و شارژی</a>
              <h3>ابزار غیر برقی</h3>
            </section>
            <section className="category">
              <h3>خودروهای ایرانی و خارجی</h3>
              <h3>موتور سیکلت</h3>
              <h3>لوازم جانبی خودرو و موتورسیکلت</h3>
              <a href="#">لوزم تزیینی</a>
              <a href="#">سیستم صوتی و تصویری</a>
              <a href="#">نظافت و نگهداری خودرو</a>
              <a href="#">کلاه کاسکت و لوازم جانبی موتور </a>
              <h3>لوازم یدکی خودرو و موتور سیکلت</h3>
              <a href="#">دیسک و صفحه کلاچ</a>
              <a href="#">جلوبندی و تعلیق</a>
              <a href="#">چراغ خودرو</a>
              <a href="#">تسمه خودرو</a>
              <a href="#">کمک فنر</a>
            </section>
          </section>
        </div>
        {/* Products Category 4 */}
        <div className="category-main-container">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات مد و پوشاک</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <h3>کفش ورزشی مردانه</h3>
              <h3>کفش ورزشی زنانه</h3>
              <h3>پوشاک ورزشی پسرانه</h3>
              <h3>پوشاک ورزشی دخترانه</h3>
              <h3>کفش ورزشی پسرانه</h3>
              <h3>کفش ورزشی دخترانه</h3>
              <h3>کوله پشتی مردانه</h3>
              <h3>بچه گانه</h3>
            </section>
            <section className="category">
              <h3>طلا</h3>
              <a href="#">زیورآلات طلا زنانه</a>
              <a href="#">زیورآلات طلا مردانه</a>
              <a href="#">زیورآلات طلا بچگانه</a>
              <h3>زیورآلات زنانه</h3>
              <a href="#">دستبند</a>
              <a href="#">گوشواره</a>
              <a href="#">گردنبند</a>
              <h3>زیور آلات نقره زنانه</h3>
              <h3>عینک آفتابی زنانه</h3>
              <h3>عینک آفتابی مردانه</h3>
              <h3>پوشاک ورزشی مردانه</h3>
              <h3>پوشاک ورزشی زنانه</h3>
            </section>
            <section className="category">
              <h3>زنانه</h3>
              <h3>لباس زنانه</h3>
              <a href="#">پالتو و بارانی و کاپشن زنانه</a>
              <a href="#">سوییشرت و هودی زنانه</a>
              <a href="#">ژاکت و پلیور زنانه</a>
              <a href="#">شلوار و سرهمی</a>
              <a href="#">لباس زیر</a>
              <h3>کفش زنانه</h3>
              <a href="#">کفش روزمره</a>
              <a href="#">کفش تخت</a>
              <h3>اکسسوری زنانه</h3>
              <a href="#">ساعت</a>
              <a href="#">کیف</a>
              <a href="#">شال و روسری</a>
            </section>
            <section className="category">
              <h3>مردانه</h3>
              <h3>لباس مردانه</h3>
              <a href="#">سوییشرت و هودی مردانه</a>
              <a href="#">ژاکت و پلیور مردانه</a>
              <a href="#">شلوار</a>
              <a href="#">لباس زیر</a>
              <h3>کفش مردانه</h3>
              <a href="#">کفش روزمره</a>
              <a href="#">کفش رسمی</a>
              <h3>اکسسوری مردانه</h3>
              <a href="#">ساعت</a>
              <a href="#">کیف</a>
              <a href="#">کمربند</a>
            </section>
          </section>
        </div>
        {/* Products Category 5 */}
        <div className="category-main-container">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات کالاهای سوپرمارکتی</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <h3>کنسرو و کمپوت</h3>
              <h3>تنقلات</h3>
              <a href="#">شکلات ، تافی و آبنبات</a>
              <a href="#">بیسکویت و ویفر</a>
              <a href="#">مغز طعم دار خشکبار</a>
              <a href="#">کیک و کلوچه</a>
              <a href="#">چبپس و پاپ کورن</a>
              <a href="#">پفک و اسنک</a>
              <a href="#">آدامس و خوشبوکننده</a>
              <h3>خشکبار و شیرینی</h3>
            </section>
            <section className="category">
              <a href="#">ماست</a>
              <a href="#">پنیر</a>
              <a href="#">خامه</a>
              <h3>نوشیدنی ها</h3>
              <a href="#">چای</a>
              <a href="#">دمنوش</a>
              <a href="#">قهوه</a>
              <a href="#">آب و آب معدنی</a>
              <a href="#">ماءالشعیر</a>
              <a href="#">نوشابه</a>
              <a href="#">شربت و آبمیوه</a>
              <h3>میوه و سبزی</h3>
              <h3>غذای آماده و نودل</h3>
              <h3>فرآورده های منجمد</h3>
            </section>
            <section className="category">
              <a href="#">مربا</a>
              <a href="#">عسل</a>
              <a href="#">حلواشکری ، ارده و کنجد</a>
              <h3>موارد پروتئینی</h3>
              <a href="#">سوسیس و کالباس</a>
              <a href="#">گوشت گوسفندی</a>
              <a href="#">گوشت مرغ</a>
              <a href="#">تخم مرغ</a>
              <a href="#">گوشت گاو و گوساله</a>
              <a href="#">میگو</a>
              <a href="#">ماهی</a>
              <a href="#">تن ماهی</a>
              <h3>لبنیات</h3>
              <a href="#">شیر</a>
            </section>
            <section className="category">
              <h3>کالای اساسی و خوار و بار</h3>
              <a href="#">نان</a>
              <a href="#">برنج</a>
              <a href="#">روغن</a>
              <a href="#">قند</a>
              <a href="#">شکر</a>
              <a href="#">سس</a>
              <a href="#">رب و کنسرو گوجه</a>
              <a href="#">خیارشور و ترشیجات</a>
              <a href="#">آبلیمو ، آبغوره و سرکه</a>
              <a href="#">ماکارونی ، پاستا و رشته</a>
              <a href="#">زعفران ، زرشک و تزئینات غذا</a>
              <a href="#">حبوبات و سویا</a>
              <h3>صبحانه</h3>
            </section>
          </section>
        </div>
        {/* Products Category 6 */}
        <div className="category-main-container">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات اسباب بازی ، کودک و نوزاد</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <a href="#">ساک لوازم نوزاد</a>
              <a href="#">لوازم جانبی گردش و سفر</a>
              <a href="#">آغوشی</a>
              <h3>لوازم شخصی</h3>
              <a href="#">پستانک و ملزومات</a>
              <a href="#">شیردوش</a>
              <a href="#">شورت آموزشی</a>
              <h3>غذاخوری</h3>
              <a href="#">صتدلی غذا خوری</a>
              <a href="#">شیشه شیر ، سرلاک ، داروخوری</a>
            </section>
            <section className="category">
              <a href="#">ترازو</a>
              <a href="#">دوربین و پیجر اتاق کودک</a>
              <a href="#">تب سنج و دماسنج</a>
              <a href="#">محافظ و ابزار ایمنی</a>
              <h3>خواب کودک</h3>
              <a href="#">مبلمان اتاق کودک</a>
              <a href="#">چراغ خواب کودک</a>
              <a href="#">تشک کودک</a>
              <a href="#">سرویس خواب</a>
              <a href="#">پتو</a>
              <a href="#">بالش شیردهی</a>
              <h3>ملزومات گردش و سفر</h3>
              <a href="#">کالسکه و کریر</a>
              <a href="#">صندلی خودرو کودک و نوزاد</a>
            </section>
            <section className="category">
              <h3>پلی استیشن ، ایکس باکس و بازی</h3>
              <h3>اسباب بازی</h3>
              <a href="#">فکری و آموزشی</a>
              <a href="#">پازل ، لگو و ساختنی</a>
              <a href="#">عروسک و فیگور</a>
              <a href="#">اسپینر ، ابزار شوخی و سرگرمی</a>
              <a href="#">تفنگ ، تیر و لوازم بازی جنگی</a>
              <h3>بازی و سرگرمی کودک</h3>
              <a href="#">ماشین بازی ، موتور ، سه چرخه</a>
              <a href="#">دوچرخه</a>
              <a href="#">تشک بازی و پارک بازی</a>
              <a href="#">تاب و سرسره</a>
              <h3>سلامت ، ایمنی و مراقبت</h3>
              <a href="#">تصفیه هوا</a>
            </section>
            <section className="category">
              <h3>بهداشت و حمام کودک و نوزاد</h3>
              <a href="#">پوشک</a>
              <a href="#">دستمال مرطوب</a>
              <a href="#">حوله</a>
              <a href="#">وان حمام نوزاد</a>
              <a href="#">مینی واش</a>
              <a href="#">شامپو کودک و نوزاد</a>
              <h3>پوشاک و کفش کودک و نوزاد</h3>
              <a href="#">لباس کودک و لباس نوزادی</a>
              <a href="#">کفش</a>
              <a href="#">کفش ورزشی</a>
              <a href="#">جوراب و پاپوش کودک نوزاد</a>
              <a href="#">کلاه و پیشبند نوزاد</a>
              <h3>تبلت</h3>
            </section>
          </section>
        </div>
        {/* Products Category 7 */}
        <div className="category-main-container">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات محصولات بومی و محلی</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <a href="#">ساک لوازم نوزاد</a>
              <a href="#">لوازم جانبی گردش و سفر</a>
              <a href="#">آغوشی</a>
              <h3>لوازم شخصی</h3>
              <a href="#">پستانک و ملزومات</a>
              <a href="#">شیردوش</a>
              <a href="#">شورت آموزشی</a>
              <h3>غذاخوری</h3>
              <a href="#">صتدلی غذا خوری</a>
              <a href="#">شیشه شیر ، سرلاک ، داروخوری</a>
            </section>
            <section className="category">
              <a href="#">کیس و کاور سنتی</a>
              <a href="#">گلدان سنتی</a>
              <a href="#">مجسمه سنتی</a>
              <a href="#">چراغ خواب و آباژور</a>
              <h3>خواب و حمام</h3>
              <a href="#">کوسن سنتی</a>
              <h3>انواع قالی و قالیچه</h3>
              <a href="#">گلیم</a>
              <h3>پوشیدنی های بومی محلی</h3>
              <a href="#">پوشاک بومی و محلی</a>
              <a href="#">اکسسوری بومی و محلی</a>
            </section>
            <section className="category">
              <h3>ظروف سنتی</h3>
              <a href="#">کاسه و کاسه بشقاب سنتی</a>
              <a href="#">بشقاب سنتی</a>
              <a href="#">پارچ سنتی</a>
              <a href="#">لیوان سنتی</a>
              <a href="#">قندان سنتی</a>
              <a href="#">دیگ و قابلمه سنتی</a>
              <a href="#">شکلات خوری دست ساز</a>
              <h3>ابزار آشپزخانه سنتی</h3>
              <a href="#">دیس و سینی سنتی</a>
              <a href="#">تخته سرو سنتی</a>
              <a href="#">سبد دستبافت سنتی</a>
              <h3>دکوراتیو سنتی</h3>
              <a href="#">آویز سرپرده سنتی</a>
            </section>
            <section className="category">
              <h3>خوراکی های بومی محلی</h3>
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
              <h3>خانه و کاشانه بومی محلی</h3>
            </section>
          </section>
        </div>
        {/* Products Category 8 */}
        <div className="category-main-container">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات زیبایی و سلامت</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <a href="#">تست قند خون</a>
              <a href="#">تب سنج</a>
              <a href="#">فشار سنج</a>
              <a href="#">ابزار مراقبت پا</a>
              <a href="#">نمایشگر ضربان قلب</a>
              <a href="#">ماساژور</a>
              <a href="#">تشک و پتوی برقی</a>
              <a href="#">ویلچر</a>
            </section>
            <section className="category">
              <a href="#">جیبی</a>
              <a href="#">اسپری</a>
              <h3>طلا ، نقره و زیورآلات زنانه</h3>
              <a href="#">زیورآلات نقره زنانه</a>
              <a href="#">زیورآلات طلا زنانه</a>
              <a href="#">حلقه و انگشتر طلای زنانه</a>
              <a href="#">دستبند طلا زنانه</a>
              <a href="#">گردنبند طلا زنانه</a>
              <a href="#">گوشواره طلا زنانه</a>
              <h3>زیورآلات نقره مردانه</h3>
              <h3>ایزار سلامت و طبی</h3>
              <a href="#">مچ بند و ساعت هوشمند</a>
              <a href="#">ترازو</a>
              <a href="#">کالای خواب و استراحت طبی</a>
            </section>
            <section className="category">
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
              <h3>عطر ، ادکلن ، اسپری و ست</h3>
              <a href="#">مردانه</a>
              <a href="#">زنانه</a>
            </section>
            <section className="category">
              <h3>لوازم آرایشی</h3>
              <a href="#">آرایش چشم و ابرو</a>
              <a href="#">آرایش لب</a>
              <a href="#">آرایش صورت</a>
              <a href="#">مواد آرایش مو</a>
              <a href="#">سنگ پا ، بهداشت و زیبایی ناخن</a>
              <a href="#">تجهیزات جانبی آرایشی</a>
              <h3>لوازم بهداشتی</h3>
              <a href="#">کرم و مراقبت پوست</a>
              <a href="#">شامپو و مراقبت مو</a>
              <a href="#">بهداشت دهان و دندان</a>
              <a href="#">بهداشت و مراقبت بدن</a>
              <a href="#">ضد تعریق</a>
              <h3>لوازم شخصی برقی</h3>
            </section>
          </section>
        </div>
        {/* Products Category 9 */}
        <div className="category-main-container">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات خانه و آشپزخانه</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <a href="#">ظروف یکبار مصرف</a>
              <h3>مواد شوینده</h3>
              <a href="#">شوینده ظروف</a>
              <a href="#">شوینده لباس</a>
              <a href="#">تمیز کننده سطوح</a>
              <h3>دستمال کاغذی</h3>
              <h3>ملحفه ، سرویس ، لوازم خواب</h3>
              <h3>حوله و وسایل حمام</h3>
              <h3>پادری ، کمد ، لوازم اتاق خواب</h3>
              <h3>لوازم دستشویی و روشویی</h3>
              <h3>فندک و لوازم جانبی</h3>
              <h3>گل ، خاک ، کود ، لوازم باغبانی</h3>
            </section>
            <section className="category">
              <h3>حیوانات خانگی ، غذا و لوازم </h3>
              <a href="#">آکواریوم ، غذا و لوازم آبزیان</a>
              <h3>سرو و پذیرایی</h3>
              <a href="#">سرویس غذا خوری</a>
              <a href="#">قاشق ، چنگال و کارد</a>
              <a href="#">پارچ ، بطری ، لیوان و ماگ</a>
              <a href="#">ظروف پذیرایی</a>
              <h3>نور و روشنایی</h3>
              <a href="#">لامپ ، چراغ و ریسه</a>
              <a href="#">لوستر و چراغ تزیینی</a>
              <h3>آشپزخانه</h3>
              <a href="#">سرویس و ظروف پخت و پز</a>
              <a href="#">فلاسک و کلمن</a>
              <a href="#">کتری ، قوری ، لوازم سرو چای</a>
            </section>
            <section className="category">
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
            </section>
            <section className="category">
              <h3>تلویزیون</h3>
              <a href="#">ایکس ویژن</a>
              <a href="#">جی پلاس</a>
              <a href="#">دوو</a>
              <h3>دکوراتیو</h3>
              <a href="#">مبلمان خانگی</a>
              <a href="#">دکوراسیون اداری</a>
              <a href="#">آینه</a>
              <a href="#">پرده</a>
              <a href="#">تابلو</a>
              <a href="#">ساعت دیواری و رومیزی</a>
              <a href="#">شمع ، گل و گلدان</a>
              <h3>فرش ماشینی ، دستبافت ، تابلو</h3>
              <h3>لوازم خانگی</h3>
            </section>
          </section>
        </div>
        {/* Products Category 10 */}
        <div className="category-main-container">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات کتاب ، لوازم تحریر و هنر</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
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
            </section>
            <section className="category">
              <a href="#">لوازم جانبی ادوات موسیقی</a>
              <a href="#">گیتار </a>
              <a href="#">کیبورد و ارگ</a>
              <a href="#">پیانو دیجیتال</a>
              <a href="#">درام ، پرکاشن و دف</a>
              <a href="#">تجهیزات استودیویی</a>
              <a href="#">ویولن</a>
              <a href="#">سازهای ایرانی</a>
              <h3>فرش ماشینی ، دستبافت ، تابلو</h3>
              <a href="#">فرش ماشینی</a>
              <a href="#">فرش دستباف</a>
              <a href="#">تابلو فرش</a>
              <h3>صنایع دستی</h3>
              <a href="#">کالا های مسی</a>
            </section>
            <section className="category">
              <h3>لوازم التحریر</h3>
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
              <h3>آلات موسیقی</h3>
            </section>
            <section className="category">
              <h3>کتاب و مجله</h3>
              <a href="#">کتاب چایی</a>
              <a href="#">مجلات خارجی و داخلی</a>
              <h3>کتاب صوتی</h3>
              <h3>محتوای آموزشی</h3>
              <a href="#">آموزش موسیقی</a>
              <a href="#">آموزش ورزش و سرگرمی</a>
              <a href="#">آموزش زبان</a>
              <a href="#">آموزش نرم افزار و کامپیوتر</a>
              <h3>نرم افزار</h3>
              <h3>بازی کنسول و کامپیوتر</h3>
              <h3>فیلم سینمایی ، سریال و مستند</h3>
              <h3>آلبوم موسیقی</h3>
            </section>
          </section>
        </div>
        {/* Products Category 11 */}
        <div className="category-main-container">
          <header className="category-header">
            <a href="#">
              <span>همه محصولات ورزش و سفر</span>
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <section className="category-container">
            <section className="category">
              <h3>اسکوتر برقی</h3>
              <h3>اسکیت و اسکوتر</h3>
            </section>
            <section className="category">
              <h3>لوازم ورزشی</h3>
              <h3>ورزش های هوازی و بدنسازی</h3>
              <a href="#">تجهیزات جانبی ایروبیک و تناسب اندام</a>
              <a href="#">دمبل</a>
              <a href="#">طناب</a>
              <a href="#">بارفیکس</a>
              <a href="#">تردمیل</a>
              <a href="#">لوازم پوششی و محافظتی ورزشی</a>
              <h3>ورزش های توپی</h3>
              <a href="#">توپ</a>
              <a href="#">راکت</a>
              <h3>ورزش های آبی</h3>
              <h3>ورزش های رزمی</h3>
            </section>
            <section className="category">
              <h3>کوهنوردی و کمپینگ</h3>
              <a href="#">کفش کوهنوردی</a>
              <a href="#">عصای کوهنوردی</a>
              <a href="#">چراغ قوه و چراغ پیشانی</a>
              <a href="#">چاقو و ابزار چند کاره</a>
              <a href="#">قمقمه و فلاسک</a>
              <a href="#">چادر</a>
              <a href="#">کیسه خواب</a>
              <a href="#">زیر انداز سفری</a>
              <h3>لوازم جانبی کوهنوردی و سفر</h3>
              <h3>چتر</h3>
              <h3>ساک ورزشی</h3>
              <h3>قمقمه و شیکر</h3>
            </section>
            <section className="category">
              <h3>پوشاک ورزشی مردانه</h3>
              <h3>پوشاک ورزشی زنانه</h3>
              <h3>کفش ورزشی مردانه</h3>
              <h3>کفش ورزشی زنانه</h3>
              <h3>پوشاک ورزشی پسرانه</h3>
              <h3>پوشاک ورزشی دخترانه</h3>
              <h3>کفش ورزشی پسرانه</h3>
              <h3>کفش ورزشی دخترانه</h3>
              <h3>تجهیزات سفر</h3>
              <a href="#">چمدان و ساک</a>
              <a href="#">کیف و کوله پشتی</a>
              <h3>دوچرخه</h3>
              <a href="#">لوازم جانبی دوچرخه</a>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
