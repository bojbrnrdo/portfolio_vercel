import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa6";
const socials=[
 {name:"LinkedIn",href:"https://www.linkedin.com/in/job-bernardo-787b0b241/",icon:FaLinkedinIn},
 {name:"Instagram",href:"https://www.instagram.com/jobrnrdo/",icon:FaInstagram},
 {name:"Facebook",href:"https://www.facebook.com/bojbrnrdo",icon:FaFacebookF}
];
export function PhotoSocials(){return <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3" aria-label="Social media links">{socials.map(item=>{const Icon=item.icon;return <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-xs font-bold text-white/55 transition hover:text-signal"><Icon className="text-sm transition group-hover:-translate-y-0.5"/>{item.name}</a>})}</nav>}
