const experience = [
  { period:"2024 — Present", role:"Developer", organization:"EXP Digital Solutions Corporation", type:"Professional", description:"Developing and maintaining SaaS and web-application features across front-end components, back-end logic, reusable workflows, bug fixes, and deployment validation.", tags:["SaaS","Front-end","Back-end","REST APIs"] },
  { period:"2024", role:"Cybersecurity Operations Intern", organization:"Bounty Fresh Food Inc.", type:"Internship", description:"Supported phishing simulations, endpoint monitoring, SIEM event review, and vulnerability assessment in a professional operations environment.", tags:["GoPhish","FortiSIEM","Trend Vision One"] },
  { period:"2020 — 2024", role:"BS Information Technology", organization:"NU Fairview / Asia Pacific College", type:"Education", description:"Completed a bachelor’s degree specializing in Mobile and Internet Technologies, with hackathon participation, volunteering, and active student involvement.", tags:["Degree holder","Mobile & Internet","Hackathons"] },
];

export function ExperienceTimeline(){
 return <section id="experience" className="experience-section scroll-mt-20 py-24 md:py-36"><div className="container-grid">
  <div className="grid gap-8 border-b border-ink/15 pb-9 lg:grid-cols-12"><div className="lg:col-span-3"><p className="eyebrow text-signal">02 / Journey</p></div><div className="lg:col-span-8"><h2>A timeline shaped by building and learning.</h2><p className="mt-5 max-w-2xl leading-7 text-muted">The work, technical exposure, and education behind how I approach web products today.</p></div></div>
  <div className="experience-timeline relative mt-16 md:mt-24"><div className="experience-line absolute bottom-0 top-0" aria-hidden="true"/>
   {experience.map((item,index)=><article key={item.period+item.role} data-reveal data-reveal-repeat className={"experience-row relative grid md:grid-cols-[1fr_6rem_1fr] "+(index%2?"is-right":"is-left")}>
    <div className={"experience-card relative "+(index%2?"md:col-start-3":"md:col-start-1")}><div className="flex flex-wrap items-start justify-between gap-4"><div><h3 className="text-xl md:text-2xl">{item.role}</h3><p className="mt-1 text-sm font-bold text-signal">{item.organization}</p></div><span className="experience-type rounded-full border border-signal/25 bg-signal/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[.12em] text-signal">{item.type}</span></div><p className="mt-6 text-sm leading-7 text-muted">{item.description}</p><div className="mt-6 flex flex-wrap gap-2">{item.tags.map(tag=><span key={tag} className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-bold text-muted">{tag}</span>)}</div></div>
    <div className="experience-marker absolute md:static md:col-start-2 md:row-start-1"><span className="relative z-10 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 font-mono text-[9px] font-bold text-paper shadow-lg">{item.period}</span></div>
   </article>)}
  </div>
 </div></section>
}
