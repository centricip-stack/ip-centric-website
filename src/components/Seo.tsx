import { useEffect } from "react";
import { SITE } from "../data/site";

type SeoProps = {
  title: string;
  description?: string;
};

/** Lightweight per-page document head management (no external dependency). */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} — ${SITE.name}`;

    const desc = description ?? SITE.description;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = desc;
  }, [title, description]);

  return null;
}
