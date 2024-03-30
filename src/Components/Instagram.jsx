import React from "react";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/elegant-icons.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
import "../css/owl.carousel.min.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import instagram1 from "../img/instagram/instagram-1.jpg";
import instagram2 from "../img/instagram/instagram-2.jpg";
import instagram3 from "../img/instagram/instagram-3.jpg";
import instagram4 from "../img/instagram/instagram-4.jpg";
import instagram5 from "../img/instagram/instagram-5.jpg";
import instagram6 from "../img/instagram/instagram-6.jpg";

export default function Instagram() {
  return (
    <div>
      <>
        {/* Instagram Section Begin */}
        <section className="instagram spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="instagram__pic">
                  <div
                    className="instagram__pic__item set-bg"
                    data-setbg={instagram1}
                  />
                  <div
                    className="instagram__pic__item set-bg"
                    data-setbg={instagram2}
                  />
                  <div
                    className="instagram__pic__item set-bg"
                    data-setbg={instagram3}
                  />
                  <div
                    className="instagram__pic__item set-bg"
                    data-setbg={instagram4}
                  />
                  <div
                    className="instagram__pic__item set-bg"
                    data-setbg={instagram5}
                  />
                  <div
                    className="instagram__pic__item set-bg"
                    data-setbg={instagram6}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="instagram__text">
                  <h2>Instagram</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <h3>#Male_Fashion</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Instagram Section End */}
      </>
    </div>
  );
}
