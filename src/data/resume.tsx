import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactNode } from "react"; // Import ReactNode type

export const DATA = {
  name: "Llewellyn Y. Fisher",
  initials: "L.Y.F",
  url: "https://telluricaquarian.com/",
  location: "Sydney, AU",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "Product Distributor for Enagic® | Designer | Automation & No-Code Student",
  summary:
    "At the end of 2019, I left my job in Sport & Recreation and at the beginning of 2020 became introduced to 'Kangen Water®'. I have been actively promoting and sharing information pertaining to this high-quality water.\n\nUp until the year 2025, I have been in and out of jobs, alongside taking up 'A La Carte' Freelancing jobs here and there pertaining to media buying for SMBs/SMEs, Volunteer/Commission work for startups.\n\nOffering my services via Upwork, Social Media & Outreach.",
  avatarUrl: "/me.png",
  skills: ["Figma", "Canva", "After Effects", "Cursor", "CapCut"],
  navbar: [
    { href: "/", icon: <HomeIcon />, label: "Home" },
    { href: "/blog", icon: <NotebookIcon />, label: "Blog" },
  ],
  contact: {
    email: "llewellyn@telluricaquarian.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/telluricaquarian",
        icon: <Icons.github />,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/thethinkingspirit/",
        icon: <Icons.instagram />,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/potentialseven",
        icon: <Icons.x />,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@telluricaquarian",
        icon: <Icons.youtube />,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: <Icons.email />,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Tellurica Aquarian",
      href: "https://telluricaquarian.com/",
      badges: [],
      location: "Remote",
      title: "Brand Owner & Product Distributor",
      logoUrl: "/atomic.png",
      start: "2023",
      end: "Present",
      description:
        "Telluricaquarian.com is a brand created by Llewellyn Fisher that is designed for the delivery of messages relating to products & services pertaining to Technology, Design & Water, with a large focus on fringe insights regarding Water Technology (Water Ionisers offered by Enagic®) designed to electrolytically transform water.",
    },
  ],
  education: [
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Electrolysis - The Path to Green Hydrogen",
      logoUrl: "/buildspace.jpg",
      start: "2025",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Telluric Aquarian",
      href: "https://telluricaquarian.com/",
      dates: "2023 - Present",
      active: true,
      description:
        "Telluricaquarian.com is a brand created by 'Llewellyn' that is designed for the delivery of messages relating to products & services pertaining to Technology, Design & Water, with a large focus on fringe insights regarding Water Technology (Water Ionisers offered by Enagic®) designed to electrolytically transform water.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://telluricaquarian.com/",
          icon: <Icons.globe key="globe" /> as ReactNode, // Ensuring it's treated as ReactNode
        },
      ],
      image: "",
      video: "https://www.youtube.com/embed/4umTJOJ1ydI?si=yDSQ1SSZ18p02ci2",
    },
  ],
  hackathons: [],
} as const;
