import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

interface Hackathon {
  title: string;
  description?: string;
  dates: string;
  location?: string;
  image?: string;
  links?: { title: string; href: string }[];
}

export const DATA = {
  name: "Llewellyn Y. Fisher",
  initials: "L.Y.F",
  url: "https://telluricaquarian.com/",
  location: "Planet Earth, Telluric Aquarian",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "Designer, Enagic® Product Distributor. I love designing, learning & sharing the research I find.",
  summary: `At the end of 2019, I left my job in Sport & Recreation and at the beginning of 2020 became introduced to "Kangen Water®". I have been actively promoting and sharing information pertaining to this high-quality water.\n\nUp until the year 2025, I have been in and out of jobs, alongside taking up "A La Carte" Freelancing gigs here and there pertaining to media buying for SMBs/SMEs, Volunteer/Commission work for startups.\n\nOffering my services via Upwork, Social Media & Outreach.`,
  avatarUrl: "/me.png",
  skills: [
    "Figma",
    "No-Code",
    "Prompt Engineering",
    "Vibe-Coder",
    "Python",
    "Canva",
    "Youtuber",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "llewellyn@telluricaquarian.com",
    tel: "Upon Req.",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/telluricaquarian",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/potentialseven",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@telluricaquarian",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [...],
  education: [...],
  projects: [...],
  hackathons: [] as Hackathon[], // Ensuring correct typing
  experience: [...],
} as const;
