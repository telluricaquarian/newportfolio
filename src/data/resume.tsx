import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Llewellyn Y. Fisher",
  initials: "L.Y.F",
  url: "https://telluricaquarian.com/",
  location: "Sydney, AU",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "Product Distributor for Enagic® | Designer | Automation & No-Code Student",
  summary:
    "At the end of 2019, I left my job in Sport & Recreation and at the beginning of 2020 became introduced to \"Kangen Water®\". I have been actively promoting and sharing information pertaining to this high-quality water.\n\nUp until the year 2025, I have been in and out of jobs, alongside taking up \"A La Carte\" Freelancing jobs here and there pertaining to media buying for SMBs/SMEs, Volunteer/Commission work for startups.\n\nOffering my services via Upwork, Social Media & Outreach.",
  avatarUrl: "/me.png",
  skills: ["Figma", "Canva", "After Effects", "Cursor", "CapCut"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "llewellyn@telluricaquarian.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/telluricaquarian",
        icon: Icons.github,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/thethinkingspirit/",
        icon: Icons.instagram,
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
    {
      company: "Healthyinspirit",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Ecom Business Owner",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Built & Deployed a Shopify store for the purpose of selling a product pertaining to Health & Wellness, with a focus on the promotion of cardiovascular health.",
    },
    {
      company: "City of Sydney Council",
      href: "https://www.cityofsydney.nsw.gov.au/",
      badges: [],
      location: "Sydney, AU",
      title: "Programs Coordinator",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "The Y",
      href: "https://ymca.org.au/",
      badges: [],
      location: "Sydney, AU",
      title: "Programs Coordinator",
      logoUrl: "/splunk.svg",
      start: "November 2016",
      end: "January 2020",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Enagic®",
      href: "https://enagic-australia.com/",
      badges: [],
      location: "Japan, Osaka",
      title: "Product Distributor",
      logoUrl: "/lime.svg",
      start: "March 2020",
      end: "Present",
      description:
        "For over four decades, Enagic® International has been the leader in manufacturing water-ionisation systems that transform regular tap water into pure, healthy, electrolytically-reduced and hydrogen-rich drinking water.\n\nThis Japan-based company internationally distributes hundreds of thousands of Kangen Water machines to homes all over the globe.\n\nEnagic®'s Kangen Water® systems enhance nature's most vital life-source using the latest scientific research and technology, merged with superior Japanese craftsmanship.\n\nEnagic® International is the only water filtration and alkaline-ioniser Distribution Company in the world with its own OEM manufacturing facility in Japan and ISO certified quality control processes. All employees must master high-level technological knowledge and proficiency throughout the entire process, including development, production, supply, and service.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
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
        "Telluricaquarian.com is a brand created by 'Llewellyn' that is designed for the delivery of messages relating to products & services pertaining to Technology, Design & Water, with a large focus on fringe insights regarding Water Technology (Water Ionisers offered by Enagic®) designed to electrolytically transform water",
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
          icon: Icons.globe,
        },
      ],
      image: "",
      video: "https://www.youtube.com/embed/4umTJOJ1ydI?si=yDSQ1SSZ18p02ci2",
    },
  ],
  hackathons: [],
} as const;
