import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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

  work: [
    {
      company: "Telluricaquarian",
      href: "https://telluricaquarian.com/",
      badges: [],
      location: "Remote",
      title: "Designer & Enagic® Product Distributor",
      logoUrl: "/atomic.png",
      start: "2023",
      end: "Present",
      description:
        "Telluricaquarian is a brand that is created by Llewellyn, designed for the delivery of messages relating to products & services pertaining to Technology, Design & Water, with a large focus on fringe insights regarding Water Technology Water Ionisers offered by Enagic® which are designed to electrolytically transform water.",
    },
    {
      company: "Freelance Media Buyer",
      href: "https://telluricaquarian.com/",
      badges: [],
      location: "Remote",
      title: "Freelance Media Buyer",
      logoUrl: "/shopify.svg",
      start: "November 2021",
      end: "January 2022",
      description:
        "Set-up, Consult & prepare local businesses for their initial meta media buying campaign, aid in assimilating client to back-ended platform and how to measure results",
    },
    {
      company: "Areculateir",
      href: "https://telluricaquarian.com/",
      badges: [],
      location: "Sydney, NSW",
      title: "Web Designer",
      logoUrl: "/nvidia.png",
      start: "2024",
      end: "Present",
      description:
        "Areculateir is a Web Design Brand, Designed to function as a content delivery directory, showcasing design & visual assets.",
    },
  ],
  education: [
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Electrolysis - The Path to Green Hydrogen",
      logoUrl: "/buildspace.jpg",
      start: "Dec. 2024",
      end: "Jan 2025",
    },
    {
      school: "Domestika",
      href: "https://www.domestika.org/en",
      degree: "Innovative Web Design in Figma Step-by-Step Process",
      logoUrl: "/waterloo.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Make.com",
      href: "https://www.make.com/en/",
      degree: "Make Foundation",
      logoUrl: "/laurier.png",
      start: "2025",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Telluricaquarian",
      href: "https://telluricaquarian.com/",
      dates: "2023 - Present",
      active: true,
      description:
        "As indicated, Telluricaquarian is a brand created by Llewellyn for the delivery of messages related to products & services in Technology, Design & Water.",
      technologies: ["Next.js", "Typescript", "Wordpress", "Ricosupply", "Figma"],
      links: [
        {
          type: "Website",
          href: "https://telluricaquarian.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://telluricaquarian.com/wp-content/uploads/2025/02/Thumbnail-3.mp4",
    },
    {
      title: "A.I enhanced CGI/Animations for Enhanced Perceived Value",
      href: "https://telluricaquarian.com/",
      dates: "2024 - Present",
      active: true,
      description: "Leveraging AI to enhance CGI & Animation.",
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
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/telluricaquarian",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://telluricaquarian.com/wp-content/uploads/2025/02/Thumbnail-4.mp4",
    },
  ],
  hackathons: [],
  experience: [
    {
      title: "Design Engineering",
      dates: "2024 - 2025",
      location: "Sydney, AU",
      description: "Building Telluricaquarian & refining design & branding skills",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "Doubled down into learning about water education & tech.",
      dates: "2022 - 2023",
      location: "Waterloo, Ontario",
      description:
        "In between jobs and upskilling, I invested the years 2022 to 2023 learning about water in an in-depth manner.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
  ],
} as const;
