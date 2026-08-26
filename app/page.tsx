import { DeveloperStack } from "@/components/DeveloperStack";
import { PhotoSocials } from "@/components/PhotoSocials";
import { ProjectIndex } from "@/components/ProjectIndex";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { GuestbookWall } from "@/components/GuestbookWall";
import { HeroStory } from "@/components/HeroStory";
import { DeveloperHome } from "@/components/DeveloperHome";

const metrics=[["04","Web projects"],["2+","Years in software"],["19","Tools mapped"],["100%","Build mindset"]];
const journey=[
 {period:"2024 — NOW",role:"Developer",organization:"EXP Digital Solutions Corporation",description:"Developing and maintaining SaaS and web-application features across front-end components, back-end logic, reusable workflows, bug fixes, and deployment validation.",tags:["SaaS","Front-end","Back-end","REST APIs"]},
 {period:"2024",role:"Cybersecurity Operations Intern",organization:"Bounty Fresh Food Inc.",description:"Supported phishing simulations, endpoint monitoring, SIEM event review, and vulnerability assessment in a professional operations environment.",tags:["GoPhish","FortiSIEM","Trend Vision One"]},
 {period:"2020 — 2024",role:"BS Information Technology",organization:"NU Fairview / Asia Pacific College",description:"Completed a bachelor’s degree specializing in Mobile and Internet Technologies, with hackathon participation, volunteering, and active student involvement.",tags:["Degree holder","Mobile & Internet","Hackathons"]}
];

export default function Home(){return <main id="main-content">
 <HeroStory/>
 <DeveloperHome/>

 <section aria-label="Career metrics" className="border-y border-ink/15 bg-ink text-paper"><div className="container-grid grid grid-cols-2 lg:grid-cols-4">{metrics.map(([value,label],index)=><div key={label} className={"px-5 py-9 "+(index?"border-l border-paper/15":"")}><strong className="block font-display text-4xl text-signal md:text-5xl">{value}</strong><span className="mt-3 block text-[10px] font-black uppercase tracking-[.14em] text-paper/60">{label}</span></div>)}</div></section>

 <ExperienceTimeline/>

 <section id="stack" className="scroll-mt-20 border-y border-ink/10 py-0"><DeveloperStack/></section>

 <div id="portfolio" className="scroll-mt-20"><ProjectIndex/></div>

 <section id="about" className="scroll-mt-20 py-24 md:py-36"><div className="container-grid grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3"><p className="eyebrow text-signal">05 / Working principles</p></div><div className="lg:col-span-9"><h2>Clear interface. Dependable logic. Useful outcome.</h2><div className="mt-12 grid gap-px bg-ink/15 md:grid-cols-3">{[["01","Understand","Start with the user, the workflow, and the real problem behind the request."],["02","Build","Connect interface decisions to maintainable application logic and structured data."],["03","Validate","Test complete journeys, resolve edge cases, and improve before delivery."]].map(([number,title,copy])=><article key={title} className="bg-paper p-7"><span className="font-mono text-xs text-signal">{number}</span><h3 className="mt-10">{title}</h3><p className="mt-5 text-sm leading-6 text-muted">{copy}</p></article>)}</div></div></div></section>

 <GuestbookWall/>
 <section id="contact" className="scroll-mt-20 px-4 pb-4"><div className="contact-closing relative mx-auto max-w-[1320px] overflow-hidden px-6 py-16 text-center text-[#f4f6ef] md:px-14 md:py-20"><div className="contact-glow absolute inset-0" aria-hidden="true"/><div className="relative mx-auto max-w-5xl"><p className="eyebrow text-signal">07 / Ready for the next build?</p><h2 className="contact-title mx-auto mt-7 max-w-4xl text-5xl font-black leading-[.92] tracking-[-.06em] text-[#f4f6ef] md:text-7xl">Let’s build something <span className="text-signal">useful.</span></h2><p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60">I’m open to web-development roles and projects where responsive implementation, dependable product behavior, and thoughtful user experience matter.</p><a href="mailto:jobmatthewbernardo@gmail.com" className="magnetic mt-9 inline-flex items-center gap-3 rounded-full border border-signal/70 px-7 py-4 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-signal hover:text-[#071009]">Start a conversation <span>↗</span></a><div className="mt-14 grid items-center gap-5 border-t border-white/10 pt-6 text-xs text-white/45 md:grid-cols-3"><p className="md:text-left">Job Matthew Bernardo · Web Developer</p><PhotoSocials/><a href="mailto:jobmatthewbernardo@gmail.com" className="break-all transition hover:text-signal md:text-right">jobmatthewbernardo@gmail.com</a></div></div></div></section>
 </main>}
