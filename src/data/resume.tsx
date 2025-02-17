import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Llewellyn Y. Fisher",
  initials: "L.Y.F",
  url: "https://telluricaquarian.com/",
  location: "Planet Earth, Telluric Aquarian",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "Designer, Enagic® Product Distributor. I love designing, learning & sharing the research i find.",
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
        "Telluricaquarian is a brand that is created by llewellyn, that is designed for the delivery of messages relating to products & services pertaining to Technology, Design & Water, with a large focus on fringe insights regarding Water Technology Water Ionisers offered by Enagic® which are designed to electrolytically transform water.",
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
        "Set-up, Consult & prepare local businesses for their initial meta media buying campign, aid in assimilating client to backended platform and how to measure results",
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
        "As indicated Telluricaquarian is a brand that is created by llewellyn, that is designed for the delivery of messages relating to products & services pertaining to Technology, Design & Water, with a large focus on fringe insights regarding Water Technology Water Ionisers offered by Enagic® which are designed to electrolytically transform water.",
      technologies: [
        "Next.js",
        "Typescript",
        "Wordpress",
        "Ricosupply",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://telluricaquarian.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://telluricaquarian.com/wp-content/uploads/2025/02/Thumbnail-3.mp4",
    },
    {
      title: "A.I enhanced CGI/Animations for Enhanced Perceived Value",
      href: "https://telluricaquarian.com/",
      dates: "2024 - Present",
      active: true,
      description:
        "Leveraging AI enhance CGI & Animation",
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
    {
      title: "Areculateir",
      href: "https://telluricaquarian.com/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Aftereffects",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://telluricaquarian.com/wp-content/uploads/2025/02/Thumbnail-5.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://telluricaquarian.com/wp-content/uploads/2025/02/Thumbnail-7.mp4",
    },
  ],
  hackathons: [
    {
    },
  ],
  title: "Design Engineering",
      dates: "2024 - 2025",
      location: "Sydney, AU",
      description:
        "Building Telluricaquarian & refining design & branding skills",
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
      title: "Doubledowned into learning about water edu. & tech.",
      dates: "2022 - 2023",
      location: "Waterloo, Ontario",
      description:
        "In between jobs and upskilling, invested for the better part of the years 2022 to 2023 learning about water in as in depth a manner possible.",
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
    {
      title: "Started Ecom & Freelancing",
      dates: "August 2021 - January 2022",
      location: "Sydney, AU",
      description:
        "Built, Designed, Branded & ran performance marketing campaigns via media buying strategies for Ecom stores, subsequently leveraged skills acquired into a service, noticed a gap in SMB's & SME's owners knowledge base regarding configuration of meta media buying interfaces",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/02/laurier-2.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Became a Product Distributor",
      dates: "2020",
      location: "Sydney, AU",
      description:
        "Due to my already opened mind towards natural healing and a myriad of differing things, i came across the idea concept of Kangen Water®, ended up purchasing a machine and becoming a product distributor for the company enagic®",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Started my Youtube Journey",
      dates: "2019",
      location: "Sydney, AU",
      description:
        "Made Personal Development content, started my awakening journey to nattural health etc.",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/02/laurier-1.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
