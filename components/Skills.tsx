import {
  Target,
  Layers,
  Zap,
  Code,
  FileCode,
  Rocket,
  TrendingUp,
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

export default function Skills() {
  const skills: Skill[] = [
    {
      name: "Product Strategy",
      icon: Target,
    },
    {
      name: "Content Systems",
      icon: Layers,
    },
    {
      name: "Marketing Automation",
      icon: Zap,
    },
    {
      name: "JavaScript",
      icon: Code,
    },
    {
      name: "Python",
      icon: FileCode,
    },
    {
      name: "Next.js",
      icon: Rocket,
    },
    {
      name: "Growth Strategy",
      icon: TrendingUp,
    },
  ]

  return (
    <section className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-black/6">
      <h2 className="text-sm sm:text-base md:text-lg m-0 mb-3 sm:mb-4 md:mb-6 uppercase tracking-[1px] font-semibold">
        Core Skills
      </h2>
      <ul className="list-none p-0 mt-2 flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <li
              key={skill.name}
              className="group relative bg-black text-white rounded-md sm:rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 hover:bg-[#111] cursor-default"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span>{skill.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
