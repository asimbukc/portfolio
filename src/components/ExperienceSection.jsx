const experienceData = [
  {
    company: 'UA Technologies',
    role: 'Mobile & API Developer',
    duration: 'Aug 2026 – Present',
    description: 'Developed responsive Flutter mobile applications and RESTful APIs using Node.js, Express.js, and MongoDB with modular, scalable architecture.',
    projects: ['Health & Fitness Tracker', 'Real-time Chat App', 'Expense Management System'],
  },
  {
    company: 'Saylani Tech Limited',
    role: 'Full Stack MERN Developer',
    duration: 'May 2026 – Jul 2026',
    description: 'Developed full-stack applications using the MERN stack, including REST APIs, authentication, database schemas, and responsive UIs.',
    projects: ['Agent Marketplace', 'DevForum Platform', 'Inventory Management Dashboard'],
  },
  {
    company: 'Z.A IT Park',
    role: 'Frontend React Developer',
    duration: 'Feb 2026 – Apr 2026',
    description: 'Built responsive web applications with React.js and Tailwind CSS, implementing CRUD operations, validation, and scalable UI components.',
    projects: ['Trendzone E-commerce', 'ScrapeFlow UI', 'Corporate Landing Page'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 text-white">
      <div className="absolute right-1/2 top-1/4 h-[500px] w-[800px] translate-x-1/2 rounded-full bg-gradient-to-tr from-[#ff7b54]/15 via-[#9b8cff]/15 to-[#6df4ff]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="mt-6 font-bebas text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#ff7b54] via-[#9b8cff] to-[#6df4ff] bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {experienceData.map((exp) => (
            <div key={exp.company} className="group h-[320px] w-full [perspective:1000px]">
              <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
                
                {/* Front of Card */}
                <article className="absolute inset-0 flex flex-col justify-between h-full w-full rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 [backface-visibility:hidden]">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bebas text-[2.2rem] leading-none text-white">{exp.company}</h3>
                    
                    <div className="flex flex-col gap-1 mt-1">
                      <span className="text-[15px] font-semibold bg-gradient-to-r from-[#ffb199] to-[#9b8cff] bg-clip-text text-transparent">
                        {exp.role}
                      </span>
                      <span className="font-roboto-condensed text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9b8cff]/70">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-[14px] leading-relaxed text-white/70">{exp.description}</p>
                </article>

                {/* Back of Card */}
                <article className="absolute inset-0 flex flex-col justify-center h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2e0b5d]/60 via-[#07111f] to-[#07111f] border border-[#9b8cff]/30 p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h4 className="font-bebas text-3xl text-white mb-6 tracking-wider text-center">Key Projects</h4>
                  <ul className="flex flex-col gap-3 w-full">
                    {exp.projects.map((project, idx) => (
                      <li key={idx} className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/5 rounded-xl py-3 px-4 text-[14px] font-medium text-white/90">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ff7b54] to-[#9b8cff]" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </article>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
