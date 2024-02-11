import React from "react";
import "./NotFoundPage.scss";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="not-found-page-main">
        <h4>صفحه‌ای که دنبال آن بودید پیدا نشد!</h4>
        <Link to="/" className="home-page-link">
          صفحه اصلی
          <HiChevronLeft />
        </Link>
        <div className="img-container">
          <img
            src="https://www.digikala.com/statics/img/png/page-not-found.png"
            alt=""
          />
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
