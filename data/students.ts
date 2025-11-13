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
  "Self-employed",
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
    value: "₦600,000 Value",
    subtitle: "Build Top 1 % Consistency in 90 Days",
    description:
      "The A-Player Accountability System™ gives you the structure, mentorship, and push to stay consistent. It combines a personal accountability concierge, gamified progress tracking, and weekly mentor syncs that keep your focus sharp and your goals visible every single week.",
    cta: "Secure Your Accountability Concierge",
  },
  {
    id: "unstuck",
    title: "The Unstuck Mentor Line™",
    value: "₦599,990 Value",
    subtitle: "Get Expert Help in 60 Minutes or Less",
    description:
      "Instant access to expert help whenever confusion strikes — from live mentor calls to quick voice notes and video walkthroughs. Direct 1:1 mentor access, SOS support and a 24/7 AI assistant trained on real mentor responses.",
    cta: "Secure Unstuck Mentor Line",
  },
  {
    id: "focus",
    title: "The Focus Blueprint™",
    value: "₦450,000 Value",
    subtitle: "Design Your Perfect Study System in 7 Days",
    description:
      "A mentor-guided time audit, a custom week-by-week study plan, and fail-safe reset calls that help you bounce back anytime life interrupts your flow.",
    cta: "Get Your Personal Study Blueprint",
  },
  {
    id: "bounce-back",
    title: "The Bounce-Back Blueprint™",
    value: "₦500,000 Value",
    subtitle: "Get Back on Track in 7 Days",
    description:
      "A personalized recap brief, a one-on-one catch-up call, and a custom 7-day comeback plan built with your mentor — plus a buddy system that keeps you accountable until you’re fully back in rhythm.",
    cta: "Rebuild My Momentum",
  },
  {
    id: "wildcard",
    title: "The Wildcard System™",
    value: "₦2,250,000 Value",
    subtitle: "The Always-On Backup That Turns Setbacks Into Stepping Stones",
    description:
      "Rapid project rescue sessions, mindset resets, 24/7 tech support, and new evolving mini-systems designed to handle anything that could slow you down.",
    cta: "Unlock My Wildcard Access",
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
export const resources = [
  { type: "PDF", name: "Cloud Basics Guide", icon: FileText },
  { type: "Slides", name: "Lesson 1 Presentation", icon: FileText },
  { type: "Project File", name: "AWS Setup Instructions", icon: Download },
];
export const lessons = [
  { id: 1, title: "Introduction to Cloud Engineering", active: true },
  { id: 2, title: "Understanding Cloud Models (IaaS, PaaS, SaaS)" },
  { id: 3, title: "Setting Up Your Cloud Environment" },
  { id: 4, title: "Deploying Your First Application" },
];
export const info = [
  { icon: Timer, title: "Duration", value: "1 Hour" },
  { icon: FileQuestion, title: "Questions", value: "100 Multiple Choice" },
  { icon: ClipboardCheck, title: "Passing Score", value: "70% Minimum" },
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
    q: "How do I access my course materials after enrollment?",
    a: "After enrollment, your videos, notes, and assessments are instantly available in your dashboard — accessible across all devices.",
  },
  {
    q: "Can I get a refund if I’m not satisfied?",
    a: "Yes. Refunds are available within 7 days of purchase if less than 20% of the course has been completed.",
  },
  {
    q: "How can I contact support?",
    a: "Reach us via WhatsApp, email, or phone. Our team responds within 24 hours on weekdays.",
  },
  {
    q: "Is the platform mobile-friendly?",
    a: "Absolutely. Our platform is fully optimized for mobile, tablet, and desktop experiences.",
  },
  {
    q: "Do I get a certificate after completing my program?",
    a: "Yes. Once your assessments are completed, your digital certificate is auto-generated in your dashboard.",
  },
];
