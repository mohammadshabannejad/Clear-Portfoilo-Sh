import { ExternalLink } from "lucide-react"

export default function About() {
  return (
    <section className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-black/6">
      <h2 className="text-sm sm:text-base md:text-lg m-0 mb-3 sm:mb-4 md:mb-5 uppercase tracking-[1px] font-semibold">
        About Me
      </h2>
      <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 mb-2 sm:mb-3 md:mb-4">
        I'm the founder and CEO of{" "}
        <a
          href="https://www.codehype.in"
          target="_blank"
          rel="noopener"
          className="font-medium no-underline inline-flex items-center gap-0.5"
        >
          CodeHype
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>{" "}
        - an AI-powered platform that helps people learn new tools and skills
        instantly as they launch.
      </p>
      <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 mb-2 sm:mb-3 md:mb-4">
        From scripting videos to writing code and designing interfaces, I've
        built CodeHype entirely from scratch and scaled it to 150K+ users and
        3M+ monthly reach organically.
      </p>
      <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7">
        I'm passionate about turning complexity into simplicity, building
        systems that make learning faster, easier, and more exciting for the
        next generation of creators and developers.
      </p>
    </section>
  )
}
