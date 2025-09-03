import { Slide } from "react-slideshow-image";
import banner_1 from "../../assets/images/banners/banner (1).jpg";
import banner_2 from "../../assets/images/banners/banner (2).jpg";
import banner_3 from "../../assets/images/banners/banner (3).jpg";
import banner_4 from "../../assets/images/banners/banner (4).jpg";
import banner_5 from "../../assets/images/banners/banner (5).jpg";
import banner_6 from "../../assets/images/banners/banner (6).jpg";
import banner_7 from "../../assets/images/banners/banner (7).jpg";

const HeroSection = () => {
  const banners: string[] = [
    banner_1,
    banner_2,
    banner_3,
    banner_4,
    banner_5,
    banner_6,
    banner_7,
  ];

  const indicators = (index?: number) => (
    <div className="indicator border-[1px] border-solid border-white rounded-full w-[10px] h-[10px] [&.active]:bg-white"></div>
  );

  return (
    <section className="contain overflow-hidden h-[500px] [&>div]:h-full [&>div>div]:h-full relative">
      <Slide indicators={indicators} arrows={false} cssClass={"rounded-xl"}>
        {banners.map((banner, i) => (
          <div key={i} className="each-slide-effect relative w-full h-full">
            <div
              className="each-slide-effect bg-cover bg-no-repeat bg-center w-full h-full absolute"
              style={{ backgroundImage: `url('${banner}')` }}
            ></div>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default HeroSection;
