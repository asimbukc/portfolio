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
            <div className="card w-full bg-base-100 shadow-sm border border-white/10 hover:border-white/20 transition-colors duration-300" key={exp.company}>
              <div className="card-body">
                <span className="badge badge-xs badge-warning">{exp.duration}</span>
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2 mt-2">
                  <h2 className="text-3xl font-bold">{exp.company}</h2>
                  <span className="text-sm lg:text-base font-medium bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">{exp.role}</span>
                </div>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{exp.description}</p>
                <ul className="mt-4 flex flex-col gap-2 text-xs">
                  {exp.projects.map((project, index) => (
                    <li key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
