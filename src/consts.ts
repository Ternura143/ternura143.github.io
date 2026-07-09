import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import GoogleScholar from "@/assets/icons/google-scholar.svg"
import HuggingFace from "@/assets/icons/huggingface.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"

export const SITE = {
  title: "ternura",
  description:
    "Zixuan Zhu, an MSc student at NTU working on large language model agents.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.svg",
  defaultPostImage: "/static/post-image.svg",
} as const

export const NAVIGATION = [
  { href: "/#publications", label: "Publications" },
  { href: "/#blog", label: "Blog" },
  { href: "/#projects", label: "Projects" },
  { href: "/cv", label: "CV" },
]

export const GITHUB_USERNAME = "ternura143"

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/ternura143", label: "GitHub", icon: GitHub },
  {
    href: "https://scholar.google.com/citations?user=G8yYe9UAAAAJ",
    label: "Google Scholar",
    icon: GoogleScholar,
  },
  { href: "https://huggingface.co/Ternuraz", label: "Hugging Face", icon: HuggingFace },
  { href: "https://www.linkedin.com/in/ternura", label: "LinkedIn", icon: LinkedIn },
  { href: "mailto:zzx18742002@gmail.com", label: "Email", icon: Email },
]
