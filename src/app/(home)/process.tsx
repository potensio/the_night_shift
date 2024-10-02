import { ProcessSwiper } from "./process-swiper";
export const Process = () => {
  return (
    <div className="flex flex-col flex-1 px-5 py-16 gap-10 sm:px-8 lg:py-32 lg:gap-20">
      <div className="flex flex-1 flex-col items-center gap-3 sm:gap-6 ">
        <h2 className="text-4xl text-black font-black w-fit text-center sm:text-5xl lg:text-6xl">
          Usual approach,
          <br />
          exceptional results.
        </h2>
        <p className="text-lg font-semibold text-center max-w-[800px] sm:text-xl lg:text-2xl">
          Bring your idea to life with a responsive and fully functional app,
          delivered at lightning speed, completely asynchronous.
        </p>
      </div>
      <div className="hidden flex-1 h-fit justify-center lg:flex">
        <div className="flex flex-1 gap-8 max-w-7xl justify-between">
          <div className="flex flex-1 flex-col border-2 border-black p-8 gap-4 -rotate-3 rounded-sm max-w-96 lg:p-10">
            <h3 className="text-2xl font-black sm:text-3xl lg:text-4xl">
              1. Submit your design
            </h3>
            <p className="text-lg font-semibold sm:text-xl">
              Kick things off by sending me your project details along with a
              Figma or XD file. I’ll dive into your design to make sure I
              understand your vision perfectly. Your detailed design is our
              roadmap to success.
            </p>
          </div>
          <div className="flex flex-1 flex-col border-2 border-black p-6 gap-4 rotate-2  rounded-sm max-w-96 lg:p-8">
            <h3 className="text-2xl font-black sm:text-3xl lg:text-4xl">
              2. Request to build
            </h3>
            <p className="text-lg font-semibold sm:text-xl">
              This phase is where your ideas come to life. Using Bubble, I’ll
              build a fully functional app, taking care of everything, frontend
              to backend. I’ll keep you in the loop, so feel free to give your
              feedback to make sure everything’s on point.
            </p>
          </div>
          <div className="flex flex-1 flex-col border-2 border-black p-6 gap-4 -rotate-3 rounded-sm max-w-96 lg:p-8">
            <h3 className="text-2xl font-black sm:text-3xl lg:text-4xl">
              3. Review & <br /> Refine
            </h3>
            <p className="text-lg font-semibold sm:text-xl">
              Once the build is done, it’s time for you to take a spin. Test the
              app, share your thoughts, and I’ll tweak things until you’re
              happy. Even after launch, I’ll be here for you with ongoing
              support.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 h-fit justify-center lg:hidden">
        <ProcessSwiper />
      </div>
    </div>
  );
};
