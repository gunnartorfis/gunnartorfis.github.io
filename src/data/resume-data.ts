export const RESUME_DATA = {
  name: "Gunnar Torfi Steinarsson",
  initials: "GT",
  location: "Kópavogur, Iceland",
  locationLink: "https://www.google.com/maps/place/Kópavogur",
  about:
    "Husband, father of two, and a software enthusiast building with React and React Native.",
  summary: `Steering the technological helm at Noona, I've been instrumental in leveraging React Native to craft innovative mobile experiences for many years. As the former CTO of Noona, I devoted more than seven years to shaping our technology vision and ensuring our native and web apps were at par with the best in the industry.

As a co-founder, my responsibilities spanned multiple domains including product development, engineering, SEO optimization, DevOps, and CI/CD pipeline management. I've also had to learn a lot about the business side of things, working closely with the CEO and the rest of the team.

In later years, I've also been contributing back to the community by making contributions to Expo and other React Native libraries, primarily through my own library, <a href="https://github.com/gunnartorfis/sonner-native" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">Sonner Native</a>, a React Native port of the popular web toast library Sonner.`,
  personalWebsiteUrl: "https://gunnartorfis.github.io",
  contact: {
    email: "gunnartorfis@gmail.com",
    tel: "+3548653230",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gunnartorfis",
        icon: "GitHub",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gunnartorfis/",
        icon: "LinkedIn",
      },
      {
        name: "X",
        url: "https://x.com/gunnarthedev",
        icon: "X",
      },
    ],
  },
  education: [
    {
      school: "Reykjavík University",
      degree: "Bachelor's degree in Software Engineering",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Noona Labs",
      link: "https://noona.app/hq",
      badges: [
        "Next.js",
        "Expo",
        "Tanstack Start",
        "Remix",
        "Kubernetes",
        "CI/CD",
      ],
      title: "Co-Founder, CTO, Tech Lead",
      start: "2018",
      end: null,
      description: `<That>Over the years, I have contributed to various aspects of our technology stack, being the first developer at Noona. My main focus to begin with was building the marketplace (the consumer-facing apps) from the ground-up. I initially developed a client-side SPA using Create React App back in 2018 and a mobile app with bare React Native, all written in Javascript, powered by a GraphQL API.<br/><br/>Through iterative improvements, I migrated the codebases to <strong>Typescript</strong>, <strong>Next.js</strong>, <strong>Expo</strong>, <strong>Nativewind</strong> and <strong>Tailwind</strong>, and things were in a good place. To further support team growth and development velocity, I architected a more scalable solution that enabled parallel development across multiple projects, leveraging React Native for Web. That was when I moved our Expo app and Next.js app to a <strong>monorepo</strong>, using <strong>Turborepo</strong> and pnpm workspaces. This enabled code sharing between the mobile apps and the web app. We weren't only sharing UI components, but entire features/screens. This meant we still benefited from Next.js's data fetching capabilities, etc., but didn't have to write everything twice, for the web and native. This also bridged the gap between the web and native development, improving feature parity between the platforms.</p>

<br />
<p>For Noona HQ, the enormous back-office app that company owners use. I made several significant contributions to that product; rewrite from JS to TS, leading the development of a fully-fledged POS system, initiating a big rewrite/transition from Meteor to React and introducing shadcn/ui. What I am proud of the most in the HQ development is that I architected and implemented multiple calendar systems including a traditional appointment calendar for salons and a timeline-based reservation system for restaurants, both featuring drag-and-drop functionality, resizing capabilities, and optimistic updates for instant user feedback.</p>
<br />
<p>For the past couple of months I have also been part of creating a new AI-first application. Since it is a greenfield project, I had the opportunity to work on a lot of new technologies, including <strong>Tanstack Start</strong>, <strong>Python for LLM backend systems</strong>, and <strong>Vercel's AI SDK</strong>. This includes handling streaming with server-sent events and building highly interactive offline-first applications.</p>
<br />
<p>To keep things short, I also briefly want to mention a few other things I've been working on for the last couple of years:</p>

<ul class="list-inside list-disc">
<li>Next.js app router</li>
<li>React Server Components (Next.js and Expo too)</li>
<li>Expo Router</li>
<li>iOS Live Activities and widgets</li>
<li>Native iOS development with Swift, SwiftUI and Objective-C</li>
<li>Native Android development with Kotlin and Java</li>
<li>tvOS development with React Native</li>
<li>macOS & Windows development with React Native</li>
<li>Building a universal UI library from a design system for React Native and web</li>
<li>CI/CD with Github Actions and CircleCI</li>
<li>Kubernetes + Docker</li>
</ul>`,
    },
    {
      company: "Memento Payments",
      link: "https://mementopayments.com",
      badges: ["iOS", "React Native"],
      title: "iOS Developer",
      start: "2015",
      end: "2018",
      description: `Memento Payments worked with Íslandsbanki to create an app called Kass, an app which Icelanders used to transfer money using their phone numbers. I participated in native iOS development and later rewriting the app to React Native.`,
    },
    {
      company: "Tipster",
      link: "https://tipster.is",
      badges: ["React", "TypeScript", "Objective-C", "React Native"],
      title: "Co-Founder, iOS Developer",
      start: "2014",
      end: "2019",
      description: `Tipster was a fun side project that I was part of during my BSc studies. It was essentially a communication platform between Tipsters (people selling betting advice) and Bettors (people placing sports bets). We provided a backend system for the Tipsters and a native mobile app for the Bettors.`,
    },
    {
      company: "Stefna hugbúnaðarhús",
      link: "https://stefna.is",
      badges: [],
      title: "Web development, customer support",
      start: "2014",
      end: "2015",
      description: `Front-end development of smaller websites and general customer support service.`,
    },
  ],
  projects: [
    {
      title: "Sonner Native",
      techStack: ["React Native", "RN Reanimated", "RN Gesture Handler"],
      description:
        "Sonner Native is an opinionated toast component for React Native. A port of @emilkowalski's sonner. It is customizable and performant toast library for React Native, built with Reanimated 3. It provides a simple API to display toast notifications with various options and configurations.",
      link: {
        label: "sonner native",
        href: "https://gunnartorfis.github.io/sonner-native/",
      },
    },
  ],
  testimonials: [
    {
      quote:
        "Gunnar is an excellent React Native developer. Internally we take his feedback on the product to heart - it has led to meaningful improvements in the product. Point being, his thoughts on app development are well worth following.",
      author: "Expo Team",
      source: "Expo Blog",
      link: "https://expo.dev/blog",
    },
  ],
} as const;
