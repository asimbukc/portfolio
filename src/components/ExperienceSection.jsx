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
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front of Card */}
                <div className="card absolute inset-0 w-full h-full bg-base-100 shadow-sm border border-white/10 [backface-visibility:hidden]">
                  <div className="card-body">
                    <div><span className="badge badge-xs badge-warning">{exp.duration}</span></div>
                    <div className="flex flex-col items-start gap-1 mt-2">
                      <h2 className="text-3xl font-bold">{exp.company}</h2>
                      <span className="text-sm lg:text-base font-medium bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">{exp.role}</span>
                    </div>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="card absolute inset-0 w-full h-full bg-base-100 shadow-sm border border-white/10 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="card-body justify-center">
                    <h4 className="font-bebas text-2xl text-white mb-4 tracking-widest bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#4f46e5] bg-clip-text text-transparent">Key Projects</h4>
                    <ul className="flex flex-col gap-4 text-sm">
                      {exp.projects.map((project, index) => (
                        <li key={index} className="flex items-center text-white/80">
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-3 inline-block text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
