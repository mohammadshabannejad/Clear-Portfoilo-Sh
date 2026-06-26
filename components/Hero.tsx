import { Mail, Linkedin, Github, Instagram } from "lucide-react"

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-text">
        <h1 className="text-[clamp(28px,6vw,64px)] sm:text-[clamp(32px,7vw,64px)] leading-tight tracking-[-0.5px] m-0 font-bold mb-3 sm:mb-4">
          Haris Ahmad Kaboo
        </h1>
        <p className="mt-2 mb-2 sm:mb-2.5 font-medium text-lg sm:text-xl md:text-2xl text-[#222] role">
          CEO at CodeHype - Building the future of learning.
        </p>
        <p className="mt-2 text-sm sm:text-base text-[#111] contact">
          Srinagar, Jammu & Kashmir
        </p>
        <div className="socials flex gap-2 sm:gap-3 mt-4 sm:mt-6 flex-wrap">
          <a
            href="mailto:business.codehype@gmail.com"
            aria-label="Email"
            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] border border-black rounded-lg sm:rounded-xl inline-flex items-center justify-center no-underline text-inherit transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/harisahmad59"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] border border-black rounded-lg sm:rounded-xl inline-flex items-center justify-center no-underline text-inherit transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://github.com/harisahmad59"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] border border-black rounded-lg sm:rounded-xl inline-flex items-center justify-center no-underline text-inherit transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.instagram.com/codehype_/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] border border-black rounded-lg sm:rounded-xl inline-flex items-center justify-center no-underline text-inherit transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
