import React from "react";
import blog1 from "../img/blog/blog-1.png";
import blog2 from "../img/blog/blog-2.jpg";
import blog3 from "../img/blog/blog-3.jpg";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/elegant-icons.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
import "../css/owl.carousel.min.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import calender from "../img/icon/calendar.png";

export default function Blog() {
  return (
    <div>
      <>
        {/* Latest Blog Section Begin */}
        <section className="latest spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <span>Latest News</span>
                  <h2>Fashion New Trends</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic set-bg" data-setbg={blog1} />
                  <div className="blog__item__text">
                    <span>
                      <img src={calender} alt="" /> 16 February 2020
                    </span>
                    <h5>What Curling Irons Are The Best Ones</h5>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic set-bg" data-setbg={blog2} />
                  <div className="blog__item__text">
                    <span>
                      <img src={calender} alt="" /> 21 February 2020
                    </span>
                    <h5>Eternity Bands Do Last Forever</h5>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic set-bg" data-setbg={blog3} />
                  <div className="blog__item__text">
                    <span>
                      <img src={calender} alt="" /> 28 February 2020
                    </span>
                    <h5>The Health Benefits Of Sunglasses</h5>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Blog Section End */}
      </>
    </div>
  );
}
