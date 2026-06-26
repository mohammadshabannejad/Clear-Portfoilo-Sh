import { ExternalLink } from "lucide-react"

export default function CurrentlyBuilding() {
  return (
    <section className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-black/6">
      <h2 className="text-sm sm:text-base md:text-lg m-0 mb-3 sm:mb-4 md:mb-5 uppercase tracking-[1px] font-semibold">
        Currently Building
      </h2>
      <h3 className="m-0 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg font-semibold">
        CodeHype - Your AI Learning Accelerator
        <a
          href="https://www.codehype.in"
          target="_blank"
          rel="noopener"
          aria-label="Open CodeHype website in a new tab"
          className="no-underline inline-flex items-center ml-1.5 sm:ml-2 transition-transform hover:scale-110"
        >
          <ExternalLink
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
            aria-hidden="true"
          />
        </a>
      </h3>
      <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 mb-2 sm:mb-3 md:mb-4">
        A platform designed to help users master new tools instantly as they
        launch.
      </p>
      <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7">
        → Bootstrapped and scaled to 150K+ community, and 3M+ monthly reach
        through organic growth and content-first strategy.
      </p>
    </section>
  )
}
