interface HeroProps {
  triggerScroll: () => void;
}

export const Hero = ({ triggerScroll }: HeroProps) => {
  return (
    <div className="flex flex-1 px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
      <div className="flex flex-1 flex-col gap-4 lg:gap-4">
        <h1 className="text-5xl font-extrabold max-w-[720px] md:text-6xl lg:text-[80px]">
          Bubble Developer, as a Service
        </h1>
        <p className="text-xl font-semibold max-w-[800px] lg:text-2xl">
          Bring your idea to life with a responsive and fully functional app,
          delivered at lightning speed, completely asynchronous.
        </p>
        <button
          onClick={triggerScroll}
          className="w-fit text-xl font-semibold text-green-600 border-[3px] rounded-[18px] border-[#101010] py-3 px-5 main-cta-shadow mt-3 lg:py-4 lg:px-6 md:text-xl lg:text-2xl"
        >
          How it works
        </button>
      </div>
    </div>
  );
};
