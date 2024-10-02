export const Experience = () => {
  return (
    <div className="px-4 justify-center lg:px-10 sm:flex ">
      <div className="relative flex flex-1 h-[428px] bg-black rounded-2xl lg:h-[480px] max-w-7xl ">
        <div className="flex flex-1 px-12 justify-center overflow-hidden opacity-20 md:px-28 xl:opacity-100 xl:justify-start">
          <div>
            <img
              src="code-learner.svg"
              className="min-w-[400px] relative scale-[1.6] pl-0 sm:pl-10"
              alt="Logo"
            />
          </div>
        </div>
        <div className="absolute flex px-8 py-14 h-fit left-0 right-0 bottom-0 top-0 sm:py-16 lg:px-20 ">
          <div className="flex flex-1 justify-center xl:justify-end">
            <div className="flex flex-1 flex-col items-center max-w-[560px]">
              <h3 className="text-[24px] font-extrabold text-center text-white sm:text-[30px] lg:text-[40px]">
                Unlimited projects, pause & cancel anytime.
              </h3>
              <div className="flex gap-2 items-center">
                <h3 className="text-[36px] font-extrabold text-center text-white mt-8 sm:text-[40px] lg:text-[48px]">
                  $1,685
                </h3>
                <h3 className="text-[20px] font-extrabold text-center text-white mt-8 sm:text-[28px] lg:text-[36px]">
                  /mo
                </h3>
              </div>
              <p className="block text-lg font-medium text-center text-white sm:block lg:text-xl">
                Leverage my 5 years of joyful experience in building performant,
                and secure bubble apps.
              </p>
              <button className="w-fit text-xl font-semibold text-white border-[3px] rounded-[18px] border-white py-3 px-5 negative-cta-shadow mt-8 lg:py-4 lg:px-6 md:text-xl lg:text-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
