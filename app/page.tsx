"use client"

import { useEffect } from "react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WhatIDo from "@/components/WhatIDo"
import Skills from "@/components/Skills"
import CurrentlyBuilding from "@/components/CurrentlyBuilding"
import PreviousWork from "@/components/PreviousWork"
import Highlights from "@/components/Highlights"
import Education from "@/components/Education"
import Achievements from "@/components/Achievements"
import Philosophy from "@/components/Philosophy"

export default function Home() {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const targets = document.querySelectorAll(
      "main h1, main h2, main h3, main p, main li, main a"
    )

    let i = 0
    targets.forEach((el) => {
      if (prefersReduced) {
        el.classList.remove("fade-in-up")
        ;(el as HTMLElement).style.opacity = "1"
        ;(el as HTMLElement).style.transform = "none"
      } else {
        ;(el as HTMLElement).style.animationDelay = `${Math.min(i * 60, 1000)}ms`
        el.classList.add("fade-in-up")
        i++
      }
    })
  }, [])

  return (
    <main className="max-w-[780px] mx-auto my-8 sm:my-10 md:my-12 px-4 sm:px-6 md:px-8">
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <CurrentlyBuilding />
      <PreviousWork />
      <Highlights />
      <Education />
      <Achievements />
      <Philosophy />
    </main>
  )
}
