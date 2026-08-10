const experienceData = [
  {
    company: 'UA Technologies',
    role: 'Junior Full Stack Developer',
    duration: 'Aug 2026 – Present',
    description: 'Developed responsive Flutter mobile applications and RESTful APIs using Node.js, Express.js, and MongoDB with modular, scalable architecture.',
    projects: ['Flutter Mobile App', 'Backend APIs', 'Management Systems'],
  },
  {
    company: 'Saylani Tech Limited',
    role: 'Junior Full Stack Developer',
    duration: 'May 2026 – Jul 2026',
    description: 'Developed full-stack applications using the MERN stack, including REST APIs, authentication, database schemas, and responsive UIs.',
    projects: ['Learning Management System', 'Shopify Theme Customization', 'Online Shopping Platform'],
  },
  {
    company: 'Z.A IT Park',
    role: 'Frontend React Developer',
    duration: 'Feb 2026 – Apr 2026',
    description: 'Built responsive web applications with React.js and Tailwind CSS, implementing CRUD operations, validation, and scalable UI components.',
    projects: ['Ecommerce Platform', 'Task Tracking Platform', 'Corporate Landing Page'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-12 text-white">
      <div className="absolute right-1/2 top-1/4 h-[500px] w-[800px] translate-x-1/2 rounded-full bg-gradient-to-tr from-[#38bdf8]/15 via-[#818cf8]/15 to-[#4f46e5]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="mt-6 font-bebas text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#4f46e5] bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {experienceData.map((exp) => (
            <div key={exp.company} className="group h-[320px] w-full [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">

                {/* Front of Card */}
                <article className="absolute inset-0 flex flex-col justify-between h-full w-full rounded-xl bg-white/5 backdrop-blur-md border border-white/20 p-6 md:p-8 [backface-visibility:hidden]">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bebas text-[2.2rem] md:text-[2.5rem] leading-none text-white tracking-wide">{exp.company}</h3>

                    <div className="flex flex-col gap-1.5 mt-1">
                      <span className="text-[15px] font-medium bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
                        {exp.role}
                      </span>
                      <span className="font-roboto-condensed text-[12px] font-medium uppercase tracking-[0.15em] text-white/50">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-[14px] leading-relaxed text-white/80">{exp.description}</p>
                </article>

                {/* Back of Card */}
                <article className="absolute inset-0 flex flex-col justify-center items-start h-full w-full rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2e0b5d]/80 via-[#07111f] to-[#07111f] border border-white/20 p-6 md:p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h4 className="font-bebas text-3xl text-white mb-8 tracking-widest text-left bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#4f46e5] bg-clip-text text-transparent">Key Projects</h4>
                  <ul className="flex flex-col gap-5 w-full text-left">
                    {exp.projects.map((project, idx) => (
                      <li key={idx} className="text-[15px] font-medium text-white/75 hover:text-white hover:scale-105 origin-left transition-all duration-300">
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
