import { ExternalLink } from "lucide-react"

export default function Achievements() {
  return (
    <section className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-black/6">
      <h2 className="text-sm sm:text-base md:text-lg m-0 mb-3 sm:mb-4 md:mb-5 uppercase tracking-[1px] font-semibold">
        Achievements
      </h2>
      <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7">
        <strong className="font-semibold">Won 1st Prize at GCET Hackathon 2025</strong>
        <a
          href="https://www.linkedin.com/posts/harisahmad59_most-projects-die-at-the-idea-stage-some-activity-7378455799313989635-HqdV"
          target="_blank"
          rel="noopener"
          aria-label="Open related link in a new tab"
          className="no-underline inline-flex items-center ml-1.5 sm:ml-2 transition-transform hover:scale-110"
        >
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" aria-hidden="true" />
        </a>
        <br />
        Built Kashmir Apple Prices Tracker, a web app that provides real-time
        Apple product prices across different regions.
      </p>
    </section>
  )
}
