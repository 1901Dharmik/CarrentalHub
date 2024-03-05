import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        // <div className="hero-banner">
        //     <div className="content">
        //         <div className="text-content">
        //             <h1>SALES</h1>
        //             <p>
        //                 Convallis interdum purus adipiscing dis parturient
        //                 posuere ac a quam a eleifend montes parturient posuere
        //                 curae tempor
        //             </p>
        //             <div className="ctas">
        //                 <div className="banner-cta">Read More</div>
        //                 <div className="banner-cta v2">Shop Now</div>
        //             </div>
        //         </div>
        //         <img className="banner-img" src={BannerImg} />
        //     </div>
        // </div>
        <section className="pt-10 overflow-hidden bg-[#e6ffe6] md:pt-0 sm:pt-16 2xl:pt-12 home_image">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid items-center grid-cols-1 md:grid-cols-2">
                <div>
                  <h1 className="text-4xl  font-bold leading-snug text-[#018662] sm:text-4xl lg:text-5xl xl:text-6xl xl:leading-snug">
                    Rent Your  &nbsp;<span>Dream Car</span>{" "}
                    <br className="block sm:hidden" />
                    <span>Around</span>&nbsp;&nbsp;The World
                  </h1>
                  <p className="max-w-lg mt-3 text-md leading-relaxed text-gray-700 md:mt-8 pb-6">
                  We provide the best car options, with premium customer services at a competitive price
                  </p>
                  <a
                    href=""
                    className=" home-banner-btn text-small text-white border rounded-md bg-[#206c43] p-3"
                  >
                    Book Your First Car
                  </a>
                </div>

                <div className="relative">
                  {/* <img
                    className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                    alt=""
                  /> */}

                  <img
                    className="relative w-full py-[80px] xl:max-w-[50rem] xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                    src="./images/carmain.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
    );
};

export default Banner;
