const fragments=[
  {text:"</>",className:"left-[4%] top-[14%] text-5xl"},
  {text:"{ }",className:"right-[6%] top-[24%] text-4xl"},
  {text:"const build = true;",className:"left-[7%] top-[46%] text-xs"},
  {text:"01",className:"right-[11%] top-[58%] text-6xl"},
  {text:"display: grid;",className:"left-[3%] top-[76%] text-xs"},
  {text:"<main>",className:"right-[4%] top-[84%] text-sm"},
  {text:"( ) =>",className:"left-[16%] top-[91%] text-2xl"},
  {text:"100%",className:"right-[20%] top-[8%] text-xs"}
];
export function CodeBackdrop(){return <div className="code-backdrop fixed inset-0 overflow-hidden" aria-hidden="true"><div className="code-grid absolute inset-0"/>{fragments.map((item,index)=><span key={item.text} className={"code-fragment absolute font-mono font-bold "+item.className} style={{animationDelay:(index*-1.7)+"s"}}>{item.text}</span>)}<i className="code-node left-[22%] top-[20%]"/><i className="code-node right-[28%] top-[42%]"/><i className="code-node bottom-[18%] left-[42%]"/></div>}
