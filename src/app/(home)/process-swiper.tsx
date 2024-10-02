import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export const ProcessSwiper = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        centeredSlides={true}
        cardsEffect={{
          perSlideRotate: 0, // Rotasi per slide
        }}
      >
        <SwiperSlide>
          <h3 className="text-3xl font-black mb-4">1. Submit your design</h3>
          <p className="text-xl font-semibold ">
            Kick things off by sending me your project details along with a
            Figma or XD file. I’ll dive into your design to make sure I
            understand your vision perfectly. Your detailed design is our
            roadmap to success.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-black mb-4">2. Request to build</h3>
          <p className="text-xl font-semibold ">
            This phase is where your ideas come to life. Using Bubble, I’ll
            build a fully functional app, taking care of everything, frontend to
            backend. I’ll keep you in the loop, so feel free to give your
            feedback to make sure everything’s on point.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-black mb-4">
            3. Review & <br /> Refine
          </h3>
          <p className="text-xl font-semibold ">
            Once the build is done, it’s time for you to take a spin. Test the
            app, share your thoughts, and I’ll tweak things until you’re happy.
            Even after launch, I’ll be here for you with ongoing support.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
