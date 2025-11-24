import {
  Award,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  CreditCard,
  Download,
  FileQuestion,
  FileText,
  Layers,
  MapPin,
  School,
  Timer,
  Wallet,
} from "lucide-react";

export const genders = ["Male", "Female"];
export const employmentStatuses = [
  "Employed",
  "Unemployed",
  "Self_employed",
  "Student",
  "Retired",
  "Other",
];
export const academicLevels = ["Undergraduate", "Graduate", "Postgraduate"];

export const programOverviews = [
  "Duration: 12 Months",
  "Hands-on Labs & Projects",
  "1-on-1 Mentorship",
  "Career Support & Job Placement",
];
export const summary = [
  { label: "School", value: "School of Engineering", icon: School },
  { label: "Certificate", value: "Diploma", icon: Award },
  { label: "Duration", value: "12 Months (4 Semesters)", icon: Clock },
  { label: "Location", value: "Online", icon: MapPin },
  { label: "Skill Level", value: "Beginner", icon: Layers },
  { label: "Start Date", value: "February 17th 2026", icon: Layers },
];

export const steps = [
  { step: "1", title: "Pay Application Fee", icon: CheckCircle2 },
  { step: "2", title: "Get Access to Study Kit", icon: Layers },
  { step: "3", title: "Take the Assessment", icon: Award },
  { step: "4", title: "Pay School Fees", icon: Clock },
  { step: "5", title: "Start Learning", icon: School },
];

export const systems = [
  {
    id: "a-player",
    title: "The A-Player Accountability System™",

    subtitle: "Build Top 1 % Consistency in 90 Days",
    description:
      "The A-Player Accountability System™ gives you the structure, mentorship, and push to stay consistent. It combines a personal accountability concierge, gamified progress tracking, and weekly mentor syncs that keep your focus sharp and your goals visible every single week.",
    cta: "₦600,000 Value",
  },
  {
    id: "unstuck",
    title: "The Unstuck Mentor Line™",

    subtitle: "Get Expert Help in 60 Minutes or Less",
    description:
      "Instant access to expert help whenever confusion strikes — from live mentor calls to quick voice notes and video walkthroughs. Direct 1:1 mentor access, SOS support and a 24/7 AI assistant trained on real mentor responses.",
    cta: "₦599,990 Value",
  },
  {
    id: "focus",
    title: "The Focus Blueprint™",

    subtitle: "Design Your Perfect Study System in 7 Days",
    description:
      "A mentor-guided time audit, a custom week-by-week study plan, and fail-safe reset calls that help you bounce back anytime life interrupts your flow.",
    cta: "₦450,000 Value",
  },
  {
    id: "bounce-back",
    title: "The Bounce-Back Blueprint™",
    value: "",
    subtitle: "Get Back on Track in 7 Days",
    description:
      "A personalized recap brief, a one-on-one catch-up call, and a custom 7-day comeback plan built with your mentor — plus a buddy system that keeps you accountable until you’re fully back in rhythm.",
    cta: "₦500,000 Value",
  },
  {
    id: "wildcard",
    title: "The Wildcard System™",
    value: "",
    subtitle: "The Always-On Backup That Turns Setbacks Into Stepping Stones",
    description:
      "Rapid project rescue sessions, mindset resets, 24/7 tech support, and new evolving mini-systems designed to handle anything that could slow you down.",
    cta: "₦2,250,000 Value",
  },
];

export const bonuses = [
  {
    id: "career-roi",
    title: "Career & ROI Transformation Suite™",
    value: "₦850,000 Value",
    description:
      "A 90-day roadmap that helps you launch your career, track income goals, and stay guided until you win. Your post-program safety net so you never have to guess what comes next.",
    cta: "Activate My Career Transformation Suite",
  },
  {
    id: "cert-fast",
    title: "60-Minute Cloud Certification Fast-Track System™",
    value: "₦650,000 Value",
    description:
      "Personalized certification plan, mock exams, and 1:1 mentor guidance that fast-tracks your prep for AWS, Azure, or GCP.",
    cta: "Fast-Track My Certification Plan",
  },
  {
    id: "mastery-proof",
    title: "Cloud Mastery & Proof Accelerator™",
    value: "₦700,000 Value",
    description:
      "Work on mentor-led projects and architecture challenges that mirror real company systems. Walk away with a verified portfolio of work.",
    cta: "Build My Cloud Mastery Portfolio",
  },
  {
    id: "job-14",
    title: "14-Day Job Placement Blueprint™",
    value: "₦600,000 Value",
    description:
      "A clear, mentor-guided plan to package your portfolio, polish LinkedIn, and apply the right way so you move from learning to earning fast.",
    cta: "Activate My Job Placement Blueprint",
  },
  {
    id: "90-role",
    title: "90-Day Role Mastery Mentorship™",
    value: "₦600,000 Value",
    description:
      "Paired with a seasoned engineer who guides you through your first 90 days, helping you solve real challenges and build confidence on the job.",
    cta: "Activate My Role Mastery Mentorship",
  },
  {
    id: "path-navigator",
    title: "60-Minute Career Path Navigator™",
    value: "₦500,000 Value",
    description:
      "A focused session where a mentor helps you analyze strengths, review progress, and map the exact specialization that matches your goals.",
    cta: "Find My Cloud Career Path",
  },
  {
    id: "mastermind",
    title: "Lifetime Mastermind Access™",
    value: "₦700,000 Value",
    description:
      "A private network of mentors, engineers, and alumni who share job leads, collaborate on projects, and grow together long after graduation.",
    cta: "Join the Mastermind Network",
  },
  {
    id: "interview-bootcamp",
    title: "4-Week Cloud Interview Mastery Bootcamp™",
    value: "₦500,000 Value",
    description:
      "Mock interviews, feedback sessions, and mentor-led coaching that sharpen how you speak, think, and perform under pressure.",
    cta: "Start My Interview Mastery Bootcamp",
  },
  {
    id: "legacy-builder",
    title: "Legacy Builder System™",
    value: "₦600,000 Value",
    description:
      "Build a personal brand that showcases expertise, authority, and results with mentor guidance on storytelling, profile optimization, and content creation.",
    cta: "Build My Cloud Legacy",
  },
  {
    id: "shadow-pro",
    title: "Shadow-the-Pro Experience™",
    value: "₦600,000 Value",
    description:
      "Sit front-row as senior engineers build and troubleshoot live systems, explaining every move and decision so you learn to think like a pro.",
    cta: "Join the Shadow-the-Pro Experience",
  },
];

export const info = [
  { icon: Timer, title: "Duration", value: "1 Hour" },
  { icon: FileQuestion, title: "Questions", value: "100 Multiple Choice" },
  { icon: ClipboardCheck, title: "Passing Score", value: "70% Minimum" },
];

export const lessons = [
  {
    id: 1,
    title: "Beginner Guide to Cloud Engineering",
    video: "https://www.youtube.com/embed/kCAu-YndS-U?si=YfWtOyAVGX7CQrkV",
    duration: "60 mins",
    difficulty: "Beginner-Friendly",
    whatYouWillLearn: [
      "Cloud engineers design systems that must scale, stay reliable, and keep data secure — skills in networking and software engineering principles are the bedrock of those responsibilities.",
      "Start here — build the fundamentals confidently, and you’ll turn cloud curiosity into a career-ready skillset.",
    ],
    overview:
      "This 1-hour primer turns cloud anxiety into clarity. You’ll learn what “the cloud” really is (remote servers accessed over the Internet), see everyday examples like iCloud and Google Cloud, and understand how companies use the cloud to host infrastructure, serve millions of users, and protect data. The video breaks down core internet building blocks — networks, packets, protocols, routers/switches, and web servers — and walks through how a website loads (DNS → TCP → TLS → HTTP). Finally, it ties cloud work to software engineering principles you’ll rely on every day: modularity, abstraction, testing, and continuous deployment..",
    resources: [
      {
        type: "Slides",
        name: "Beginner Guide to Cloud Engineering",
        link: "https://docs.google.com/presentation/d/1VtBwTitr_V45UPFDePTw06t-Y_Iw0RRseJNgGjduj-A/edit",
        icon: FileText,
      },
      {
        type: "Slides",
        name: "Beginner Guide to Cloud Engineering",
        link: "",
        icon: FileText,
      },
      {
        type: "PDF",
        name: "Beginner Guide to Cloud Engineering",
        link: "https://file.notion.so/f/f/f90e59a7-e640-4353-8809-3612d3d2bc8b/ba030655-fafc-4069-be57-c3e152343032/Beginners_Guide_to_Cloud_Engineering.pdf?table=block&id=2b1f756e-be1b-804f-85f5-ed088bf143b1&spaceId=f90e59a7-e640-4353-8809-3612d3d2bc8b&expirationTimestamp=1764050400000&signature=54sHhfWWDDBAWOPIHo1SaHKzH2LTR0HcdBZ421G76Yw&downloadName=Beginners%E2%80%99+Guide+to+Cloud+Engineering.pdf",
        icon: FileText,
      },
    ],
  },

  {
    id: 2,
    title: "What is Frontend Engineering?",
    video: "https://www.youtube.com/embed/ncTfhpPZ2ek?si=E6G1wUTsaAvbBzLM",
    duration: "58 mins",
    difficulty: "Beginner-Friendly",
    whatYouWillLearn: [
      "Clear questions on role differences, responsibilities, and how frontend/backend work connects to cloud systems on Cloud Top G assessments.",
      "Cloud engineers frequently interact with backend teams and must understand APIs, data storage, and server logic—while appreciating frontend needs that affect performance and user experience.",
      "Master the map of software roles now — knowing both sides makes you a smarter, more effective cloud engineer.",
    ],
    overview:
      "This 58-minute guide demystifies the two halves of software engineering so you can see where cloud work fits in. Learn what front-end engineers build (the user interface, UX, and performance concerns) and what back-end engineers own (servers, databases, APIs, and business logic). The video explains the day-to-day responsibilities, key soft and hard skills, and how these roles collaborate with product and design teams. Finally, it ties those responsibilities back to the cloud, showing why understanding both sides matters for reliable, scalable systems.",
    resources: [
      {
        type: "Slides",
        name: "Frontend Engineering Deck",
        link: "https://docs.google.com/presentation/d/1U0G2O1iWn43brDlkr4Y9GMMCH_22sIXIF5Y1DuFen94/edit",
        icon: FileText,
      },
      {
        type: "PDF",
        name: "Frontend Engineering",
        link: "https://file.notion.so/f/f/f90e59a7-e640-4353-8809-3612d3d2bc8b/ea989d9d-e8cb-4484-876c-0561fcd5f94a/Front-End_Engineering.pdf?table=block&id=2b1f756e-be1b-803c-ba70-c9d7fdaec13e&spaceId=f90e59a7-e640-4353-8809-3612d3d2bc8b&expirationTimestamp=1764050400000&signature=MGmrwKlcAhcNDrmQqKMD5F4Nt5NG4A6Fdh1cXleTAbo&downloadName=Front-End+Engineering.pdf",
        icon: FileText,
      },
      {
        type: "Project File",
        name: "UI Architecture Samples",
        link: "https://example.com/ui-samples.zip",
        icon: Download,
      },
    ],
  },

  {
    id: 3,
    title: "What is Backend Engineering?",
    video: "https://www.youtube.com/embed/yFhufyfKlgk?si=yYTasc14sC0idBvA",
    duration: "50 mins",
    difficulty: "Beginner-Friendly",
    whatYouWillLearn: [
      "Questions on backend responsibilities, required skills, and how backend systems connect to cloud infrastructure on Cloud Top G assessments.",
      "Cloud engineers collaborate closely with backend teams: knowing databases, APIs, servers, and deployment tools helps you design scalable, secure cloud solutions that support real business logic.",
      "Master the backend mindset — it’s the backbone of every product and the key to building reliable cloud systems.",
    ],
    overview:
      "This 50-minute session pulls back the curtain on everything that runs behind the websites and apps you use. Learn what backend engineering really is—servers, databases, APIs, application logic—and why domain knowledge matters when you build business-aligned systems. The video covers core responsibilities (designing architectures, securing data, optimizing performance), required tools and technologies, and the soft skills that make backend teams effective. It closes by showing how backend work maps to cloud engineering responsibilities you’ll meet on the job.",
    resources: [
      {
        type: "PDF",
        name: "Backend Setup Guide",
        link: "https://example.com/backend-setup.pdf",
        icon: FileText,
      },
      {
        type: "Checklist",
        name: "Environment Checklist",
        link: "https://example.com/backend-checklist.pdf",
        icon: FileText,
      },
      {
        type: "Starter Kit",
        name: "Backend Starter Templates",
        link: "https://example.com/backend-starter.zip",
        icon: Download,
      },
    ],
  },

  {
    id: 4,
    title: "Introduction to Cloud Engineering (Part 1)",
    video: "https://www.youtube.com/embed/xVAQ0UL_MIU?si=3Py87F7Ekzz7MNTr",
    duration: "47 mins",
    difficulty: "Beginner-Friendly",
    whatYouWillLearn: [
      "Exam questions about core cloud concepts, benefits, and the common cloud engineering roles and responsibilities..",
      "Understanding cloud fundamentals and the value the cloud brings to businesses helps you design scalable, cost-effective solutions and choose the right cloud role for your skills..",
      "Learn the backbone of modern tech—master these fundamentals and you’ll be ready to shape real, high-impact cloud systems.",
    ],
    overview:
      "This 47-minute guide traces cloud engineering from its early ideas to today’s cloud platforms, showing why the field exploded as providers like Amazon, Google, and Microsoft scaled services. You’ll get a clear definition of cloud computing, the practical benefits it unlocks (agility, elasticity, cost savings, and rapid global deployment), and how businesses use the cloud for everything from backups to large-scale apps. The video then maps what cloud engineers actually do—architecture, deployment, maintenance, security, and optimization—and explains the different cloud roles you can pursue",
    resources: [
      {
        type: "PDF",
        name: "Setup Guide",
        link: "https://example.com/setup.pdf",
        icon: FileText,
      },
      {
        type: "Checklist",
        name: "Environment Checklist",
        link: "https://example.com/check.pdf",
        icon: FileText,
      },
      {
        type: "Starter Kit",
        name: "Starter Templates",
        link: "https://example.com/starter.zip",
        icon: Download,
      },
    ],
  },

  {
    id: 5,
    title: "Introduction to Cloud Engineering (Part 2)",
    video: "https://www.youtube.com/embed/2H7bjsWAwuI?si=GeuA205GkFPZLMaw",
    duration: "47 mins",
    difficulty: "Beginner-Friendly",
    whatYouWillLearn: [
      "Questions on cloud engineer role expectations, required skills, and responsibilities in Cloud Top G assessments.",
      "These skills let you build scalable, resilient, and cost-effective cloud systems while communicating solutions clearly to teams and stakeholders.",
      "Set a clear goal, commit to the fundamentals, and use persistence — the cloud market is growing and rewards those who keep learning.",
    ],
    overview:
      "This 47-minute guide shows the mix of people skills, platform knowledge, and tool mastery you need to start a cloud career. It covers five high-impact soft skills (clear communication, attention to detail, explaining complex ideas simply, problem solving, and adaptability) and the core technical capabilities—Linux, networking, DevOps & containers, virtualization, major cloud providers, security & recovery, automation/orchestration, and CI/CD. You’ll also see the day-to-day responsibilities of cloud engineers: design, deployment, automation, security, disaster recovery, and cross-team collaboration.",
    resources: [
      {
        type: "PDF",
        name: "Skills Guide",
        link: "https://example.com/cloud-skills.pdf",
        icon: FileText,
      },
      {
        type: "Checklist",
        name: "Skill Checklist",
        link: "https://example.com/skills-check.pdf",
        icon: FileText,
      },
      {
        type: "Starter Kit",
        name: "Practice Templates",
        link: "https://example.com/templates.zip",
        icon: Download,
      },
    ],
  },

  {
    id: 6,
    title: "Cloud Prerequisite & Public Cloud",
    video: "https://www.youtube.com/embed/OCEH6D1xHxA?si=n7h0u7roanhPaAGX",
    duration: "41 mins",
    difficulty: "Beginner-Friendly",
    whatYouWillLearn: [
      "Answering assessment questions about cloud fundamentals, public-cloud features, provider examples, and trade-offs when choosing a deployment model.",
      "Knowing how public clouds work—and their strengths and limitations—helps you design scalable, cost-effective, and resilient cloud solutions while anticipating security, compliance, and vendor constraints.",
      "Get the fundamentals right: understand the cloud types so you can architect with confidence and make smarter choices on real projects.",
    ],
    overview:
      "This 41-minute lesson gives you a clear foundation in what cloud computing is and why it matters, then focuses on the most common deployment model: the public cloud. You’ll get a compact definition of cloud computing, learn how public cloud providers (AWS, Azure, GCP, IBM, Oracle, Alibaba) operate, and review public-cloud characteristics like scalability, pay-per-use billing, managed infrastructure, redundancy, and security measures. The video also weighs the practical advantages and real drawbacks of public clouds so you can judge when they fit a business need.",
    resources: [
      {
        type: "PDF",
        name: "Public Cloud Notes",
        link: "https://example.com/public-cloud.pdf",
        icon: FileText,
      },
      {
        type: "Checklist",
        name: "Cloud Prep Checklist",
        link: "https://example.com/public-check.pdf",
        icon: FileText,
      },
      {
        type: "Starter Kit",
        name: "Public Cloud Templates",
        link: "https://example.com/public-templates.zip",
        icon: Download,
      },
    ],
  },

  {
    id: 7,
    title: "Private & Hybrid Cloud",
    video: "https://www.youtube.com/embed/ehyzudiPiLI?si=AbAG_HO9VfTfhr89",
    duration: "44 mins",
    difficulty: "Intermediate",
    whatYouWillLearn: [
      "Assessment questions on private cloud models, advantages, limitations, and hybrid cloud integration methods..",
      "These concepts shape real-world decisions on architecture, compliance, performance, and when to blend private and public environments for the best results.",
      "Mastering private cloud gives you the confidence to design secure, reliable systems — the kind businesses trust with their most critical data.",
    ],
    overview:
      "This video walks you through what a private cloud really is, how organizations deploy it, and why businesses choose it for control, security, and compliance. You’ll explore the different models — on-premise, outsourced, managed, and virtual private cloud — and understand their strengths, challenges, and use cases. The lesson also introduces how private and public clouds come together through VPNs, APIs, containerization, and cloud bursting to form a hybrid cloud. By the end, you’ll have a clear picture of where private cloud fits into modern cloud architecture.",
    resources: [
      {
        type: "PDF",
        name: "Private Cloud Notes",
        link: "https://example.com/private.pdf",
        icon: FileText,
      },
      {
        type: "Checklist",
        name: "Hybrid Checklist",
        link: "https://example.com/hybrid-check.pdf",
        icon: FileText,
      },
      {
        type: "Starter Kit",
        name: "Hybrid Templates",
        link: "https://example.com/hybrid-templates.zip",
        icon: Download,
      },
    ],
  },

  {
    id: 8,
    title: "Multi-Cloud",
    video: "https://www.youtube.com/embed/mueMfwSQzb0?si=yYerVi5dEa3q_vgy",
    duration: "40 mins",
    difficulty: "Intermediate",
    whatYouWillLearn: [
      "Assessment questions on multi-cloud concepts, characteristics, advantages, and limitations.",
      "Modern companies rarely rely on a single provider. Knowing how multi-cloud works helps you design resilient, flexible solutions that stay compliant while avoiding vendor lock-in.",
      "Mastering multi-cloud puts you ahead — giving you the skills to design cloud systems that stay flexible, reliable, and ready for anything",
    ],
    overview:
      "This video breaks down how organizations use multiple cloud providers to gain flexibility, reduce risk, and improve performance. It explains how workloads can be distributed across public, private, and hybrid clouds, and why companies mix platforms like AWS, Azure, and GCP. You’ll also see the core traits of a multi-cloud strategy — diversification, cost optimisation, reliability, and vendor independence — along with the challenges around complexity, integration, and compliance. By the end, you’ll understand what makes multi-cloud a powerful but demanding cloud approach.",
    resources: [
      {
        type: "PDF",
        name: "Multi-Cloud Notes",
        link: "https://example.com/multi.pdf",
        icon: FileText,
      },
      {
        type: "Checklist",
        name: "Multi-Cloud Checklist",
        link: "https://example.com/multi-check.pdf",
        icon: FileText,
      },
      {
        type: "Starter Kit",
        name: "Multi-Cloud Templates",
        link: "https://example.com/multi-templates.zip",
        icon: Download,
      },
    ],
  },

  {
    id: 9,
    title: "Cloud Service Models",
    video: "https://www.youtube.com/embed/4BTmXHKaLTI?si=PzHuwFj4qHEzbnLG",
    duration: "43 mins",
    difficulty: "Beginner-Friendly",
    whatYouWillLearn: [
      "Build the knowledge needed to confidently tackle assessment questions on cloud service models.",
      "Understanding these models is essential for designing, deploying, and managing cloud solutions efficiently.",
      "Master the cloud, and you’re not just learning technology—you’re stepping into the future of work.",
    ],
    overview:
      "Dive into the world of cloud computing with a clear, practical guide to the three core cloud service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Learn how each model powers modern businesses, from scalable virtual resources and development platforms to on-demand software accessible anywhere. By the end, you’ll understand the strengths, limitations, and real-world applications of each service model, setting a solid foundation for your cloud journey.",
    resources: [
      {
        type: "PDF",
        name: "Service Model Notes",
        link: "https://example.com/service-models.pdf",
        icon: FileText,
      },
      {
        type: "Checklist",
        name: "Service Model Checklist",
        link: "https://example.com/service-check.pdf",
        icon: FileText,
      },
      {
        type: "Starter Kit",
        name: "Service Model Templates",
        link: "https://example.com/service-templates.zip",
        icon: Download,
      },
    ],
  },
];

export const guidelines = [
  "Ensure a stable internet connection before starting.",
  "Do not close or refresh the tab once the assessment begins.",
  "You have one attempt — make sure you’re fully prepared.",
  "Your progress is automatically saved during the test.",
  "Avoid switching tabs or opening new windows during the assessment.",
];

export const plans = [
  {
    title: "Legacy Access Plan",
    span: "(Best for early visionaries who move first)",
    price: "₦150,000 per deposit",
    total: "₦600,000 Total",
    duration: "(4 Semesters, 12 Months)",
    icon: Wallet,
    note: " Secure your advantage — the most flexible path to start your legacy.",
    highlights: [
      " ₦150,000 per semester — flexible and easy to manage.",
      "Structured over 4 semesters with mentor-guided progress.",
      "Full program access unlocked after first payment.",
    ],
    timeline: {
      period: "Nov 1 – Dec 20",
      label: "Legacy Access Window",
    },
  },
  {
    title: "Prime Access Plan",
    span: "(Ideal for action-takers ready to accelerate)",
    price: "₦300,000 per deposit",
    total: "₦600,000 Total",
    duration: "(4 Semesters, 12 Months)",
    icon: CreditCard,
    note: "A balanced plan for those ready to gain momentum without delay.",
    highlights: [
      "₦300,000 up-front payment covers 2 for semesters.",
      "The balance of ₦300,000 due later in your journey.",
      "Immediate program access and mentor integration.",
    ],
    timeline: {
      period: " Nov 1 – Jan 20",
      label: "Prime Access Window",
    },
  },
  {
    title: "Elite Access Plan",
    span: "(For those going all-in from day one)",
    price: "₦600,000 full payment",
    total: "₦600,000 Total",
    duration: "(4 Semesters, 12 Months)",
    icon: Layers,
    note: "Pay once — own your seat among the Top 1% instantly.",
    highlights: [
      " One-time full investment for the entire program.",
      "Instant unrestricted access to all systems and resources.",
      "Priority mentor support and lifetime network benefits.",
    ],
    timeline: {
      period: "Nov 1 – Feb 17",
      label: " Elite Access Window",
    },
  },
];

export const faqs = [
  {
    q: "How can i contact support?",
    a: "The Cloud Top G Support Team is always within reach and ready to assist you. You can contact us via email at support@cloudtopg.com, or connect directly on WhatsApp at +234 907 977 8199. Our support line is also available on the same number for calls and inquiries.",
  },
  {
    q: "How do i access the study Kits?",
    a: "To access your Study Kit, you’ll need to first apply to the School of Cloud Engineering. Once your application has been confirmed, the Study Kit will automatically unlock on your student portal. Inside, you’ll find curated resources designed to help you prepare effectively for your admission assessment and begin your Cloud Top G journey with confidence.",
  },
  {
    q: "Will I take an assessment for the School of Cloud Engineering?",
    a: "Each student completes an assessment as part of the admission process. Once your application is confirmed, you can refresh and log back into your student portal to access your Home Study Kit. Details about your assessment; such as the date and schedule. will be shared with you shortly after, giving you time to prepare and perform at your best.",
  },
  {
    q: "How is the assessment taken?",
    a: "The assessment is conducted online as part of the admission process. Once your application fee has been confirmed, you’ll gain access to your Study Kit to help you prepare. Each student is given a three-day window to take the assessment, and you may complete it on any of those days. Please note that the assessment can only be taken once, and scaling through this assessment is a crucial step in your admission into the School of Cloud Engineering.",
  },
  {
    q: "How do I process refunds?",
    a: "All application and tuition fees paid to Cloud Top G for our programs are non-refundable. In the rare case of an error where a learner is wrongfully charged, Cloud Top G is committed to resolving the issue promptly. To address such matters, you can contact our support team by sending an email to support@cloudtopg.com..",
  },
  {
    q: "How do I pay the tuition fee?",
    a: "To make your experience seamless and stress-free, tuition payment becomes available once your admission has been confirmed on the Cloud Top G platform. From there, you’ll receive clear instructions and access to complete your payment securely through the student portal.",
  },
];
