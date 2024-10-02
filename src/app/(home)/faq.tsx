import { ArrowDown } from "@phosphor-icons/react";

export const Faq = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 py-20 px-3 sm:px-8 sm:gap-16 lg:py-32 lg:px-20 bg-[#FAFAFA]">
      <h3 className="text-3xl font-black w-fit self-center sm:text-4xl">
        Frequently Asked
      </h3>
      <div className="flex flex-1 flex-col gap-1 sm:gap-4">
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">Why Bubble.io?</h4>
            <ArrowDown />
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            With Bubble, I can whip up your app in no time, saving you money and
            getting you to market faster. It’s all about efficiency without
            cutting corners. Imagine seeing your app take shape in days, not
            months.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              Who are the developers?
            </h4>
            <ArrowDown />
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            No middlemen, no outsourcing—just me Hanif, I will personally handle
            every project.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              How do we communicate?
            </h4>
            <ArrowDown />
          </summary>
          <p className="text-base mt-2 sm:text-lg">Mainly Discord.</p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              What is the turnaround time for completing a project?
            </h4>
            <ArrowDown />
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            Project timelines can vary based on complexity and your unique
            requirements. Here’s what you can expect: the initial phase of your
            project will be visible within a week or two. Focus on delivering
            fast, high-quality results, and I’ll keep you informed with updates
            every few days.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              Is there any work you don't cover?
            </h4>
            <ArrowDown />
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            While I’m all about app development, there are a few things I leave
            to the experts. I don’t handle app store submissions, e-commerce
            setups like Shopify, or things outside the core development process.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              Are there things Bubble.io or I can't do?
            </h4>
            <ArrowDown />
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            Absolutely, while Bubble.io is incredibly powerful, it does have its
            limits. There are some functionalities and third-party integrations
            that might not be possible. And as for me, while I strive to tackle
            every challenge, there might be specific requests outside my
            expertise. But don't worry! If we hit a snag, I'll let you know
            right away and help find a solution or recommend someone who can
            assist.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              What if I'm not happy with the results?
            </h4>
            <ArrowDown />
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            If the initial results aren’t hitting the mark, no problem! I’m
            committed to tweaking, refining, and perfecting until it’s just
            right, based on your feedback. Think of us as your creative allies,
            working together until you’re absolutely satisfied with the final
            product. It’s really that simple.
          </p>
        </details>
        <details className="px-4 pt-4 open:bg-[#E5E5E5] open:pb-4 max-w-5xl self-center w-full rounded-xl transition-all">
          <summary className="flex flex-1 justify-between cursor-pointer">
            <h4 className="text-lg font-semibold sm:text-xl">
              Can I cancel or pause my subscription at any time?
            </h4>
            <ArrowDown />
          </summary>
          <p className="text-base mt-2 sm:text-lg">
            Absolutely, I do understand that circumstances can change. My
            subscriptions are designed to be flexible—cancel or pause whenever
            you need. Let’s keep things stress-free, so you can make decisions
            comfortably. No strings attached, just straightforward service.
          </p>
        </details>
      </div>
    </div>
  );
};
