import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 py-20 px-3 sm:px-8 sm:gap-16 lg:py-32 lg:px-20 bg-[#FAFAFA]">
      <h3 className="text-3xl font-black w-fit self-center sm:text-4xl">
        Frequently Asked
      </h3>
      <div className="flex flex-1 flex-col gap-1">
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              What is Bubble.io?
            </h4>
            <img
              src="caret-down.svg"
              className="self-start aspect-square w-7"
            ></img>
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            No-code development is the process of creating digital applications
            without the need for traditional coding. It leverages intuitive
            platforms that offer visual interfaces and configuration tools,
            enabling the development of software applications more efficiently.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              What if I'm not happy with the results??
            </h4>
            <img
              src="caret-down.svg"
              className="self-start aspect-square w-7"
            ></img>
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            If you're not thrilled with the initial outcome, no worries! We're
            here to revamp, refine, and retouch as much as needed, all based on
            your input. Think of us as your creative partners, in a
            give-and-take until you're beaming with pride over the final piece.
            It's really that straightforward.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              What is the turnaround time for completing a project?
            </h4>
            <img
              src="caret-down.svg"
              className="self-start aspect-square w-7"
            ></img>
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            The time it takes to wrap up a project varies with its complexity
            and your specific requirements. But here’s the deal: thanks to our
            nimble process, you’ll see the first sparks of your project come to
            life within the first week. Speed and excellence are what we aim
            for, and you’ll be getting updates every two days to make sure
            you’re always in the know. Smooth and swift, just how you like it.
            Want to know a specific timeline? Book a free 15-min intro call and
            we can discuss it all.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              Can I cancel or pause my subscription at any time?
            </h4>
            <img
              src="caret-down.svg"
              className="self-start aspect-square w-7"
            ></img>
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            Absolutely, we get that things can shift. Our subscriptions are
            chill and flexible – feel free to cancel whenever. We want this to
            be a stress-free experience, so you can make decisions with
            confidence. No strings attached, just easy vibes.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              Is there any work you don't cover?
            </h4>
            <img
              src="caret-down.svg"
              className="self-start aspect-square w-7"
            ></img>
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            No-code development is the process of creating digital applications
            without the need for traditional coding. It leverages intuitive
            platforms that offer visual interfaces and configuration tools,
            enabling the development of software applications more efficiently.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              What if I'm not happy with the results?
            </h4>
            <img
              src="caret-down.svg"
              className="self-start aspect-square w-7"
            ></img>
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            No-code development is the process of creating digital applications
            without the need for traditional coding. It leverages intuitive
            platforms that offer visual interfaces and configuration tools,
            enabling the development of software applications more efficiently.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
