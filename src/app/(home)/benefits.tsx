export const Benefits = () => {
  return (
    <div className="py-20 px-5 sm:px-8 lg:py-32 lg:px-20">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-3 sm:gap-6 lg:max-w-[360px]">
          <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">
            Subscribe with - benefits
          </h2>
          <p className="text-lg font-semibold sm:text-xl">
            My service replaces unreliable freelancers and expensive agencies
            for one flat monthly fee, with works delivered so fast that it will
            blow your mind.
          </p>
        </div>
        <div className="flex gap-2 mx-[-16px] sm:gap-4 lg:gap-10">
          <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6">
            <img src="speed-go-fast.svg" className="aspect-square" alt="Logo" />
            <p className="text-lg font-black text-center sm:text-xl md:text-2xl">
              Quick
              <br />
              Turnaround
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6">
            <img
              src="stack-of-money.svg"
              className="aspect-square"
              alt="Logo"
            />
            <p className="text-lg font-black text-center sm:text-xl md:text-2xl">
              Flat
              <br />
              monthly fee
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6">
            <img src="bug.svg" className="aspect-square" alt="Logo" />
            <p className="text-lg font-black text-center sm:text-xl md:text-2xl">
              30 days
              <br />
              Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
