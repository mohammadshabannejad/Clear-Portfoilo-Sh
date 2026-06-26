import BentoCard from "./BentoCard"

export default function Signature() {
  return (
    <BentoCard gradientPosition="center" className="text-right">
      <span className="font-[var(--font-dancing-script)] text-[clamp(40px,6vw,80px)] leading-none tracking-0 inline-block antialiased text-[#6a6a6a] dark:text-[#a0a0a0]">
        Haris
      </span>
      <div className="block w-[140px] md:w-[160px] h-px bg-[#bdbdbd] dark:bg-[#4a4a4a] mt-2 md:mt-3 ml-auto"></div>
    </BentoCard>
  )
}
