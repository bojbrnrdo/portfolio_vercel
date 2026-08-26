"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { IconType } from "react-icons";
import { HiOutlineCircleStack, HiOutlineCodeBracket, HiOutlineCommandLine, HiOutlineCpuChip } from "react-icons/hi2";
import { SiBootstrap, SiClaude, SiCss, SiGit, SiGithub, SiGithubcopilot, SiGooglegemini, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbApi, TbBrandOpenai, TbTerminal2 } from "react-icons/tb";

type Tool = { name: string; icon: IconType; color: string; group: number; x: number; y: number; drift: number };
const tools: Tool[] = [
  ["HTML",SiHtml5,"#e34f26",0,9,22,-7],["CSS",SiCss,"#8b5cf6",0,30,69,8],["JavaScript",SiJavascript,"#f7df1e",0,70,20,6],["TypeScript",SiTypescript,"#4f91e8",0,88,63,-8],["React",SiReact,"#61dafb",0,50,14,-5],["Next.js",SiNextdotjs,"#f4f4f4",0,17,79,7],["Tailwind",SiTailwindcss,"#22d3ee",0,76,78,-6],["Bootstrap",SiBootstrap,"#a86df7",0,91,35,8],
  ["Node.js",SiNodedotjs,"#72b657",1,14,27,-7],["PHP",SiPhp,"#989bce",1,49,16,6],["REST API",TbApi,"#b8ff38",1,82,31,-6],
  ["MySQL",SiMysql,"#58a8df",2,18,25,6],["Git",SiGit,"#f05032",2,51,15,-8],["GitHub",SiGithub,"#f5f5f5",2,82,30,7],
  ["Claude",SiClaude,"#d97757",3,8,27,-8],["ChatGPT",TbBrandOpenai,"#10a37f",3,29,73,7],["Codex",TbTerminal2,"#b8ff38",3,53,15,-5],["Gemini",SiGooglegemini,"#9d85ff",3,74,74,8],["Copilot",SiGithubcopilot,"#f36bb5",3,90,31,-6],
].map(([name,icon,color,group,x,y,drift])=>({name,icon,color,group,x,y,drift} as Tool));

const chapters = [
  { kicker:"01 / Interface", title:"Front-end engineering", copy:"I shape accessible, responsive interfaces and turn product intent into clear browser experiences.", icon:HiOutlineCodeBracket },
  { kicker:"02 / Logic", title:"Back-end systems", copy:"I connect interfaces to dependable application logic, APIs, validation, and reusable workflows.", icon:HiOutlineCommandLine },
  { kicker:"03 / Structure", title:"Data & integration", copy:"I organize application records and keep the flow between code, data, and delivery maintainable.", icon:HiOutlineCircleStack },
  { kicker:"04 / Vibe coding", title:"AI development workflow", copy:"I use Claude, ChatGPT, Codex, Gemini, and Copilot for vibe coding—turning ideas into working prototypes, refining code, and accelerating development.", icon:HiOutlineCpuChip },
];

export function DeveloperStack(){
  const sectionRef=useRef<HTMLDivElement>(null);
  const [progress,setProgress]=useState(0);
  const [inView,setInView]=useState(false);
  const [hovered,setHovered]=useState<number|null>(null);
  const scrollChapter=Math.min(3,Math.floor(progress*4));
  const active=hovered??scrollChapter;
  const chapterProgress=hovered !== null ? .32 : Math.max(0,Math.min(1,progress*4-scrollChapter));

  useEffect(()=>{
    let frame=0;
    const update=()=>{ cancelAnimationFrame(frame); frame=requestAnimationFrame(()=>{ const node=sectionRef.current;if(!node)return;const rect=node.getBoundingClientRect();const distance=node.offsetHeight-window.innerHeight;setProgress(Math.max(0,Math.min(1,-rect.top/Math.max(1,distance))));setInView(rect.top<window.innerHeight*.72&&rect.bottom>0); }); };
    update();window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);
    return()=>{cancelAnimationFrame(frame);window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
  },[]);

  const chapter=chapters[active];
  return <div ref={sectionRef} className="stack-story relative h-[360vh]">
    <div className="stack-scene sticky top-0 h-screen min-h-[42rem] overflow-hidden text-white">
      <div className="stack-stars absolute inset-0" aria-hidden="true" style={{transform:`translate3d(0,${progress*-90}px,0)`}}/>
      <div className="stack-aurora absolute inset-0" aria-hidden="true" style={{"--story-progress":progress} as CSSProperties}/>
      <div className="stack-constellation absolute inset-0" aria-hidden="true"/>
      <div className="container-grid relative z-20 grid h-full items-center gap-8 py-20 lg:grid-cols-[.8fr_1.2fr]">
        <div className="max-w-xl">
          <p className="eyebrow text-signal">03 / Development system</p>
          <h2 className="mt-6 text-5xl leading-[.94] text-white md:text-7xl">Tools in motion.<br/><span className="text-signal">Built into a process.</span></h2>
          <div key={active} className="stack-chapter mt-9 border-l border-signal/60 pl-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-signal">{chapter.kicker}</p>
            <h3 className="mt-3 text-2xl text-white">{chapter.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">{chapter.copy}</p>
          </div>
          <div className="mt-8 flex gap-2" aria-label="Stack chapters">{chapters.map((item,index)=>{const Icon=item.icon;return <button key={item.title} type="button" onMouseEnter={()=>setHovered(index)} onMouseLeave={()=>setHovered(null)} onFocus={()=>setHovered(index)} onBlur={()=>setHovered(null)} onClick={()=>setHovered(hovered===index?null:index)} aria-label={item.title} aria-pressed={active===index} className={`stack-step grid size-11 place-items-center rounded-full border text-lg ${active===index?"is-active":""}`}><Icon/></button>})}</div>
        </div>
        <div className="relative h-[30rem] md:h-[36rem]" aria-live="polite">
          <div className="stack-core absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full md:size-44"><span className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-white/55">{String(active+1).padStart(2,"0")} / 04</span></div>
          {tools.map((tool)=>{const Icon=tool.icon;const visible=inView&&tool.group===active;const groupTools=tools.filter(item=>item.group===tool.group);const orbitIndex=groupTools.findIndex(item=>item.name===tool.name);const startAngle=(Math.PI*2/groupTools.length)*orbitIndex;const angle=startAngle+chapterProgress*Math.PI*4.25;const baseRadius=Math.min(250,150+groupTools.length*13);const inward=Math.max(0,(chapterProgress-.52)/.48);const radius=baseRadius*(1-inward);const x=Math.cos(angle)*radius;const y=Math.sin(angle)*radius*.72;const edgeFade=Math.min(1,chapterProgress*8);const opacity=visible?edgeFade*(1-Math.pow(inward,2)):0;const scale=.62+edgeFade*.38-inward*.88;return <div key={tool.name} className={`story-tool absolute ${visible?"is-visible":""}`} style={{"--tool-x":`${x}px`,"--tool-y":`${y}px`,"--tool-scale":Math.max(.08,scale),"--tool-opacity":opacity} as CSSProperties}><span className="grid size-9 place-items-center rounded-full bg-white/5 text-xl"><Icon style={{color:tool.color}}/></span><span>{tool.name}</span></div>})}
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[.18em] text-white/35"><span>Scroll to explore</span><span className="h-px w-24 bg-white/15"><i className="block h-px bg-signal" style={{width:`${Math.max(4,progress*100)}%`}}/></span></div>
    </div>
  </div>
}
