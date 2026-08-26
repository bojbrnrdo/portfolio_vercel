import Image from "next/image";

export function ProjectVisual({ compact = false, image, imageAlt }: { compact?: boolean; image?: string; imageAlt?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-ash/45 ${compact ? "aspect-[16/9]" : "aspect-[4/3] md:aspect-[16/10]"}`}>
      {image && <Image src={image} alt={imageAlt ?? ""} fill sizes={compact ? "(min-width: 768px) 90vw, 100vw" : "(min-width: 768px) 65vw, 100vw"} className="object-contain" />}
    </div>
  );
}
