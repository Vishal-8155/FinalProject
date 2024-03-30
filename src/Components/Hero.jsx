// import React, { useEffect } from "react";
// import hero1 from "../img/hero/hero-1.jpg";
// import hero2 from "../img/hero/hero-2.jpg";
// import "../css/bootstrap.min.css";
// import "../css/font-awesome.min.css";
// import "../css/elegant-icons.css";
// import "../css/magnific-popup.css";
// import "../css/nice-select.css";
// import "../css/owl.carousel.min.css";
// import "../css/slicknav.min.css";
// import "../css/style.css";
// import $ from "jquery"; // Import jQuery
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel";

// const Hero = () => {
//     useEffect(() => {
//         // Ensure Owl Carousel is initialized after page load
//         window.addEventListener("load", () => {
//           // Initialize Owl Carousel slider
//           $(".hero__slider").owlCarousel({
//             items: 1,
//             loop: true,
//             autoplay: true,
//             autoplayTimeout: 5000,
//             autoplayHoverPause: true,
//             nav: true, // Enable navigation arrows
//             dots: false, // Disable pagination dots
//             navText: [
//               '<i class="fa fa-chevron-left"></i>',
//               '<i class="fa fa-chevron-right"></i>',
//             ], // Customize navigation arrows
//           });
//         });
//       }, []);

//   return (
//     <div>
//       <section className="hero">
//         <div className="hero__slider owl-carousel">
//           <div className="hero__items set-bg" data-setbg={hero1}>
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-5 col-lg-7 col-md-8">
//                   <div className="hero__text">
//                     <h6>Summer Collection</h6>
//                     <h2>Fall - Winter Collections 2030</h2>
//                     <p>
//                       A specialist label creating luxury essentials. Ethically
//                       crafted with an unwavering commitment to exceptional
//                       quality.
//                     </p>
//                     <a href="#" className="primary-btn">
//                       Shop now <span className="arrow_right" />
//                     </a>
//                     <div className="hero__social">
//                       <a href="#">
//                         <i className="fa fa-facebook" />
//                       </a>
//                       <a href="#">
//                         <i className="fa fa-twitter" />
//                       </a>
//                       <a href="#">
//                         <i className="fa fa-pinterest" />
//                       </a>
//                       <a href="#">
//                         <i className="fa fa-instagram" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="hero__items set-bg" data-setbg={hero2}>
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-5 col-lg-7 col-md-8">
//                   <div className="hero__text">
//                     <h6>Summer Collection</h6>
//                     <h2>Fall - Winter Collections 2030</h2>
//                     <p>
//                       A specialist label creating luxury essentials. Ethically
//                       crafted with an unwavering commitment to exceptional
//                       quality.
//                     </p>
//                     <a href="#" className="primary-btn">
//                       Shop now <span className="arrow_right" />
//                     </a>
//                     <div className="hero__social">
//                       <a href="#">
//                         <i className="fa fa-facebook" />
//                       </a>
//                       <a href="#">
//                         <i className="fa fa-twitter" />
//                       </a>
//                       <a href="#">
//                         <i className="fa fa-pinterest" />
//                       </a>
//                       <a href="#">
//                         <i className="fa fa-instagram" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;
