import React, { useState, useEffect } from 'react';
import './testimonial.scss';
import img1 from  "../1.png"
import img2 from  "../2.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialCarousel = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       image: img1,
//       testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut blandit velit. Mauris sollicitudin lorem vitae dolor tempus, id commodo lorem bibendum. Nunc a metus id massa convallis posuere."
//     },
//     {
//       name: "Jane Doe",
//       image: img2,
//       testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut blandit velit. Mauris sollicitudin lorem vitae dolor tempus, id commodo lorem bibendum. Nunc a metus id massa convallis posuere."
//     },
//     {
//       name: "Bob Smith",
//       image: img1,
//       testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut blandit velit. Mauris sollicitudin lorem vitae dolor tempus, id commodo lorem bibendum. Nunc a metus id massa convallis posuere."
//     },
//     {
//         name: "Bob Smith",
//         image: img1,
//         testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut blandit velit. Mauris sollicitudin lorem vitae dolor tempus, id commodo lorem bibendum. Nunc a metus id massa convallis posuere."
//       },
//       {
//         name: "Bob Smith",
//         image: img1,
//         testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut blandit velit. Mauris sollicitudin lorem vitae dolor tempus, id commodo lorem bibendum. Nunc a metus id massa convallis posuere."
//       }
//       ,{
//         name: "Bob Smith",
//         image: img1,
//         testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut blandit velit. Mauris sollicitudin lorem vitae dolor tempus, id commodo lorem bibendum. Nunc a metus id massa convallis posuere."
//       }
//       ,{
//         name: "Bob Smith",
//         image: img1,
//         testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut blandit velit. Mauris sollicitudin lorem vitae dolor tempus, id commodo lorem bibendum. Nunc a metus id massa convallis posuere."
//       }
//   ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonial-carousel">
        <h1><svg width="99" height="94" viewBox="0 0 99 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61.8278 44.1884C61.8278 44.1884 61.0332 43.9218 60.6621 43.388C60.2909 42.8548 58.9137 42.2677 57.748 42.2677C56.5823 42.2677 55.2051 42.8543 54.8339 43.388C54.4633 43.9218 53.6682 44.1884 53.6682 44.1884M53.2803 43.0018C53.2803 43.0018 54.8204 41.6814 55.5284 41.2812C56.2358 40.8811 58.2016 40.681 59.0087 41.0413C59.8158 41.4017 61.3146 43.0018 61.3146 43.0018M52.6138 50.3614C52.6138 50.3614 53.5714 51.1618 53.3632 52.2418C53.155 53.3218 52.0312 53.2019 51.2399 53.2422C50.4491 53.282 50.0328 54.2426 49.1586 54.2023C48.2844 54.2421 47.868 53.282 47.0772 53.2422C46.2865 53.2019 45.1622 53.3224 44.954 52.2418C44.7458 51.1613 45.7033 50.3614 45.7033 50.3614M48.2001 52.5219C48.2001 52.5219 47.3673 52.1616 47.7003 50.7219C48.0333 49.2817 48.4911 49.6017 48.4911 47.322C48.4911 45.0418 48.4911 42.2682 48.4911 42.2682M53.8626 57.3401C53.8626 57.3401 52.8233 57.4566 52.1557 57.4267C51.4886 57.3967 51.1938 57.2199 50.694 57.2398C49.695 57.2797 49.7414 57.6004 49.1582 57.6209C48.5756 57.6009 48.6219 57.2802 47.6224 57.2398C47.1227 57.2199 46.8278 57.3967 46.1608 57.4267C45.4937 57.4566 44.4538 57.3401 44.4538 57.3401M51.6978 56.6418C51.6978 56.6418 50.6575 56.1217 50.3659 56.2019C50.0743 56.282 49.1587 56.922 49.1587 56.922C49.1587 56.922 48.2431 56.282 47.9516 56.2019C47.66 56.1217 46.6196 56.6418 46.6196 56.6418M52.3238 58.0019C52.3238 58.0019 50.4507 59.2024 49.1601 59.2024C47.8696 59.2024 45.9965 58.0019 45.9965 58.0019M52.3213 38.8009C52.3213 38.8009 55.8599 35.4404 62.1873 38.8009M37.1125 44.1884C37.1125 44.1884 37.9071 43.9218 38.2783 43.388C38.6489 42.8548 40.0266 42.2677 41.1923 42.2677C42.3581 42.2677 43.7353 42.8543 44.1064 43.388C44.4775 43.9218 45.2722 44.1884 45.2722 44.1884M45.6622 43.0018C45.6622 43.0018 44.122 41.6814 43.4141 41.2812C42.7062 40.8811 40.7409 40.681 39.9338 41.0413C39.1267 41.4017 37.6279 43.0018 37.6279 43.0018M46.6194 38.8009C46.6194 38.8009 43.0813 35.4404 36.7534 38.8009M67.2354 36.8484C72.9533 46.2722 69.6386 58.366 59.8318 63.8606C50.0249 69.3552 37.4396 66.17 31.7216 56.7461C26.0037 47.3223 29.3184 35.2285 39.1253 29.7339C48.9322 24.2393 61.5175 27.4245 67.2354 36.8484ZM52.3094 27.2443C52.0048 19.8313 51.2843 12.4554 50.1502 5.17588L49.4701 0.810791L48.7899 5.17588C47.6558 12.4554 46.9353 19.8307 46.6306 27.2443C47.5593 27.1207 48.506 27.0521 49.4701 27.0521C50.4342 27.0521 51.3808 27.1207 52.3094 27.2443ZM46.6342 66.3772C46.9389 73.7903 47.6594 81.1661 48.7935 88.4457L49.4736 92.8108L50.1538 88.4457C51.2879 81.1661 52.0084 73.7908 52.313 66.3772C51.3844 66.5008 50.4377 66.5694 49.4736 66.5694C48.5095 66.5694 47.5629 66.5008 46.6342 66.3772ZM69.834 49.5387C77.5484 49.2464 85.224 48.554 92.7994 47.4635L97.3419 46.8098L92.7994 46.1562C85.224 45.0662 77.5489 44.3738 69.834 44.081C69.9626 44.9735 70.034 45.8833 70.034 46.8098C70.034 47.7364 69.9621 48.6462 69.834 49.5387ZM29.1097 44.0838C21.3953 44.3766 13.7202 45.0691 6.14432 46.159L1.60181 46.8127L6.14432 47.4664C13.7197 48.5564 21.3948 49.2488 29.1097 49.5416C28.9811 48.6491 28.9097 47.7393 28.9097 46.8127C28.9102 45.8867 28.9816 44.9764 29.1097 44.0838ZM41.1965 21.2904C38.2704 19.9429 35.4664 16.9373 34.8353 14.0276C34.2042 11.1179 33.2761 6.87381 29.1135 7.0084C29.1135 7.0084 32.6625 9.23153 32.5398 13.0054C32.4548 15.6323 31.2602 18.8646 33.4336 21.0877C35.6065 23.3108 37.6306 25.3879 37.6306 27.8241C37.6306 29.9797 36.7564 31.2864 36.7564 31.2864L36.7722 31.2801C39.5664 29.1659 42.9426 27.7341 46.6344 27.2434C46.6344 27.2434 44.9013 22.9966 41.1965 21.2904ZM57.7493 21.2903C60.6753 19.9428 63.4793 16.9372 64.1104 14.0275C64.7415 11.1178 65.6701 6.8737 69.8322 7.00829C69.8322 7.00829 66.2833 9.23142 66.4059 13.0052C66.4909 15.6322 67.6855 18.8645 65.5127 21.0876C63.3392 23.3107 61.3157 25.3877 61.3157 27.824C61.3157 29.9796 62.1899 31.2862 62.1899 31.2862L62.1741 31.28C59.3799 29.1658 56.0037 27.734 52.3119 27.2432C52.3119 27.2432 54.0444 22.9965 57.7493 21.2903ZM57.7481 72.2992C60.6741 73.6467 63.4781 76.6522 64.1092 79.5619C64.7403 82.4716 65.669 86.7158 69.8316 86.5812C69.8316 86.5812 66.2826 84.358 66.4053 80.5842C66.4903 77.9573 67.6849 74.7245 65.5115 72.5018C63.338 70.2787 61.3145 68.2017 61.3145 65.7654C61.3145 63.6098 62.1887 62.3032 62.1887 62.3032L62.1729 62.3095C59.3787 64.4237 56.0025 65.8555 52.3107 66.3462C52.3107 66.3462 54.0427 70.5929 57.7481 72.2992ZM41.1953 72.2992C38.2692 73.6467 35.4647 76.6522 34.8342 79.5619C34.2031 82.4716 33.2744 86.7158 29.1123 86.5812C29.1123 86.5812 32.6613 84.358 32.5387 80.5842C32.4537 77.9573 31.259 74.7245 33.4324 72.5018C35.6059 70.2787 37.6294 68.2017 37.6294 65.7654C37.6294 63.6098 36.7553 62.3032 36.7553 62.3032L36.7711 62.3095C39.5652 64.4237 42.9415 65.8555 46.6332 66.3462C46.6332 66.3462 44.9002 70.5929 41.1953 72.2992ZM37.0775 31.0473C31.4074 26.0118 25.4708 21.2864 19.3118 16.9098L15.619 14.2855L18.3499 17.8347C22.9044 23.7531 27.8224 29.4578 33.062 34.9064C33.6277 34.1879 34.2468 33.4961 34.9286 32.8415C35.6103 32.1858 36.3303 31.5909 37.0775 31.0473ZM61.8595 62.5745C67.5296 67.6094 73.4662 72.3354 79.6252 76.712L83.318 79.3368L80.5871 75.7876C76.0326 69.8692 71.1146 64.1645 65.875 58.7159C65.3093 59.4344 64.6902 60.1262 64.0084 60.7808C63.3267 61.436 62.6067 62.0309 61.8595 62.5745ZM65.8739 34.9035C71.1139 29.4549 76.0314 23.7501 80.5859 17.8317L83.3168 14.2831L79.624 16.9074C73.465 21.284 67.5284 26.0099 61.8583 31.0448C62.6061 31.5884 63.326 32.1834 64.0073 32.8385C64.6891 33.4932 65.3076 34.1855 65.8739 34.9035ZM33.0643 58.7179C27.8242 64.1665 22.9068 69.8712 18.3523 75.7896L15.6214 79.3383L19.3147 76.714C25.4737 72.3374 31.4103 67.6114 37.0804 62.5765C36.3326 62.0329 35.6127 61.438 34.9315 60.7828C34.2492 60.1282 33.63 59.4364 33.0643 58.7179ZM76.0175 38.8417C77.4198 36.0299 80.5475 33.3354 83.5755 32.729C86.6035 32.1225 91.0201 31.2301 90.88 27.2301C90.88 27.2301 88.5665 30.6404 84.6393 30.5226C81.9056 30.4409 78.542 29.293 76.2285 31.3815C73.915 33.4695 71.7535 35.4146 69.2177 35.4146C66.9745 35.4146 65.6148 34.5745 65.6148 34.5745L65.6213 34.5897C67.8214 37.2748 69.3114 40.5191 69.8221 44.0667C69.8221 44.0667 74.242 42.4024 76.0175 38.8417ZM76.0175 54.7493C77.4198 57.561 80.5475 60.2555 83.5755 60.862C86.6035 61.4684 91.0201 62.3608 90.88 66.3604C90.88 66.3604 88.5665 62.95 84.6393 63.0678C81.9056 63.1495 78.542 64.2975 76.2285 62.2095C73.915 60.1209 71.7535 58.1764 69.2177 58.1764C66.9745 58.1764 65.6148 59.0164 65.6148 59.0164L65.6213 59.0012C67.8214 56.3167 69.3114 53.0718 69.8221 49.5243C69.8221 49.5243 74.242 51.1886 76.0175 54.7493ZM22.935 54.7478C21.5327 57.5596 18.4051 60.2541 15.3771 60.8605C12.3491 61.467 7.9325 62.3594 8.07256 66.3589C8.07256 66.3589 10.386 62.9486 14.3132 63.0664C17.0469 63.1481 20.4106 64.2961 22.7241 62.208C25.0376 60.1195 27.199 58.175 29.7349 58.175C31.978 58.175 33.3378 59.015 33.3378 59.015L33.3313 58.9998C31.1311 56.3148 29.6411 53.0704 29.1305 49.5228C29.1305 49.5228 24.71 51.1872 22.935 54.7478ZM22.935 38.8403C21.5327 36.0285 18.4051 33.334 15.3771 32.7276C12.3491 32.1211 7.9325 31.2287 8.07256 27.2286C8.07256 27.2286 10.386 30.639 14.3132 30.5212C17.0469 30.4395 20.4106 29.2915 22.7241 31.3801C25.0376 33.4686 27.199 35.4131 29.7349 35.4131C31.978 35.4131 33.3378 34.5731 33.3378 34.5731L33.3313 34.5883C31.1311 37.2733 29.6411 40.5177 29.1305 44.0653C29.1305 44.0653 24.71 42.4009 22.935 38.8403ZM59.007 43.4792C59.007 44.1481 58.4429 44.6907 57.7464 44.6907C57.0505 44.6907 56.4858 44.1486 56.4858 43.4792C56.4858 42.8104 57.0499 42.2682 57.7464 42.2682C58.4429 42.2677 59.007 42.8104 59.007 43.4792ZM39.9338 43.4792C39.9338 44.1481 40.4978 44.6907 41.1943 44.6907C41.8903 44.6907 42.4549 44.1486 42.4549 43.4792C42.4549 42.8104 41.8908 42.2682 41.1943 42.2682C40.4984 42.2677 39.9338 42.8104 39.9338 43.4792Z" stroke="#D97122" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</h1>

<h3><svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.24976L12.1619 11.7328L14.4995 1L16.8381 11.7328L28 8.24976L19.1766 15.5005L28 22.7502L16.8381 19.2672L14.4995 30L12.1619 19.2672L1 22.7502L9.82337 15.5005L1 8.24976Z" stroke="#D97122" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg> User Testimonial<svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.24976L12.1619 11.7328L14.4995 1L16.8381 11.7328L28 8.24976L19.1766 15.5005L28 22.7502L16.8381 19.2672L14.4995 30L12.1619 19.2672L1 22.7502L9.82337 15.5005L1 8.24976Z" stroke="#D97122" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</h3>
        <Slider  className='slid testimonial-container' {...sliderSettings} >
      <div className='testimonial'>
        <img src={img1} alt="" width={"240px"} height={"320px"} />
      </div>
      <div className='testimonial'>
      <img src={img2} alt="" width={"240px"} height={"320px"} />
      </div>
      <div className='testimonial'>
      <img src={img2} alt="" width={"240px"} height={"320px"} />
      </div>
      <div className='testimonial'>
      <img src={img1} alt="" width={"246px"} height={"320px"}/>
      </div>
      <div className='testimonial'>
      <img src={img2} alt="" width={"246px"} height={"320px"}/>
      </div>
      <div className='testimonial'>
      <img src={img1} alt="" width={"246px"} height={"320px"}/>
      </div>
      <div className='testimonial'>
      <img src={img2} alt="" width={"246px"} height={"320px"}/>
      </div>
      
    </Slider>

   

    <div className="premium">
      <h1>
            <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.24976L12.1619 11.7328L14.4995 1L16.8381 11.7328L28 8.24976L19.1766 15.5005L28 22.7502L16.8381 19.2672L14.4995 30L12.1619 19.2672L1 22.7502L9.82337 15.5005L1 8.24976Z" stroke="#D97122" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> Premium Astrologers<svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.24976L12.1619 11.7328L14.4995 1L16.8381 11.7328L28 8.24976L19.1766 15.5005L28 22.7502L16.8381 19.2672L14.4995 30L12.1619 19.2672L1 22.7502L9.82337 15.5005L1 8.24976Z" stroke="#D97122" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
      </h1>
      
    </div>
    </div>
  );
};

export default TestimonialCarousel;
